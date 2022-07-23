import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    CatalogueComponent,
    CardComponent,
    FiltrePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
