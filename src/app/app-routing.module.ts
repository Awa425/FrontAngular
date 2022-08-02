import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueComponent } from './produits/catalogue/catalogue.component';
import { PanierComponent } from './panier/panier.component';
import { AddComponent } from './produits/add/add.component';
import { DetailComponent } from './produits/detail/detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes=[
  {path: '', redirectTo: '/produits', pathMatch: 'full'},
  {path: 'produits', component: CatalogueComponent},
  {path: 'panier', component: PanierComponent},
  {path: 'produits/add', component: AddComponent},
  {path: 'produits/:id', component: DetailComponent},
];

@NgModule({

  imports: [
   
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
