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
import { FiltrePipe } from './pipes/filtre.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './produits/add/add.component';
import { DetailComponent } from './produits/detail/detail.component';
import { StoreModule } from '@ngrx/store';
import { Cart } from './panier/cart.action/cart.action.component';

const routes: Routes=[
  {path: '', redirectTo: '/produits', pathMatch: 'full'},
  {path: 'produits', component: CatalogueComponent},
  {path: 'produits/add', component: AddComponent},
  {path: 'produits/:id', component: DetailComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    CatalogueComponent,
    CardComponent,
    FiltrePipe,
    AddComponent,
    DetailComponent,
    Cart.ActionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
