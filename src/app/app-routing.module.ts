import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueComponent } from './produits/catalogue/catalogue.component';
import { PanierComponent } from './panier/panier.component';
import { AddComponent } from './produits/add/add.component';
import { DetailComponent } from './produits/detail/detail.component';
import { RouterModule, Routes } from '@angular/router';
import { CommandeComponent } from './commande/commande.component';
import { DetailCommandeComponent } from './commande/detail-commande/detail-commande.component';
import { ListeCommParDateComponent } from './commande/liste-comm-par-date/liste-comm-par-date.component';

const routes: Routes=[
  {path: '', redirectTo: '/produits', pathMatch: 'full'},
  {path: 'produits', component: CatalogueComponent},
  {path: 'panier', component: PanierComponent},
  {path: 'produits/add', component: AddComponent},
  {path: 'produits/:id', component: DetailComponent},
// ******************* ChildRoot***********************
{path: 'commandes/liste', component: ListeCommParDateComponent},
  {
    path: 'commandes', 
    component: CommandeComponent,
    children:[
      {path: ':id', component: DetailCommandeComponent},
      {path: ':id/annuler', component: DetailCommandeComponent},
    ]
  },

];

@NgModule({

  imports: [
   
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
