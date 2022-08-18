import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CatalogueComponent } from './produits/catalogue/catalogue.component';
import { CardComponent } from './produits/catalogue/card/card.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './produits/detail/detail.component';
import { StoreModule } from '@ngrx/store';
import { PanierComponent } from './panier/panier.component';
import { AppRoutingModule } from './app-routing.module';
import { CommandeComponent } from './commande/commande.component';
import { ComplementComponent } from './produits/complement/complement.component';
import { DetailCommandeComponent } from './commande/detail-commande/detail-commande.component';
import { ListeCommParDateComponent } from './commande/liste-comm-par-date/liste-comm-par-date.component';
import { AdminModule } from './admin/admin.module';
// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DetailAdminCommComponent } from './admin/admin/commandes/detail-admin-comm/detail-admin-comm.component';


@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    CatalogueComponent,
    CardComponent,
    DetailComponent,
    PanierComponent,
    CommandeComponent,
    ComplementComponent,
    DetailCommandeComponent,
    ListeCommParDateComponent,
    DetailAdminCommComponent
  ],
  imports: [   
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    AppRoutingModule,
    Ng2SearchPipeModule,
    AdminModule
  ],
  exports:[
    AppComponent,
    ProduitsComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    CatalogueComponent,
    CardComponent,
    DetailComponent,
    PanierComponent,
    CommandeComponent,
    ComplementComponent,
    DetailCommandeComponent,
    ListeCommParDateComponent,
    DetailAdminCommComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
