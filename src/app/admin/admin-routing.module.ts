import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from '../produits/add/add.component';
import { AdminComponent } from './admin/admin.component';
import { CommandesComponent } from './commandes/commandes.component';
import { DetailAdminCommComponent } from './commandes/detail-admin-comm/detail-admin-comm.component';
import { ListeCommandesComponent } from './commandes/liste-commandes/liste-commandes.component';
import { ZoneCommandesComponent } from './commandes/zone-commandes/zone-commandes.component';
import { DetailLivraisonComponent } from './livraisons/detail-livraison/detail-livraison.component';
import { DetailLivreurComponent } from './livraisons/detail-livreur/detail-livreur.component';
import { LivraisonsComponent } from './livraisons/livraisons.component';
import { ProduitsComponent } from './produits/produits.component';

const routes: Routes = [
  {
    path: 'admin', 
    component: AdminComponent,
    children:[
      {
        path: 'commandes',
        component: ListeCommandesComponent,
        children:[
            {path: ':id', component: DetailAdminCommComponent},
            {path: ':zone', component: ZoneCommandesComponent},
            {path: '', redirectTo: '/admin/commandes', pathMatch: 'full'}
        ],
      },
        
      {
        path: 'livraisons', 
        component: LivraisonsComponent,
        children: [
            {path: ':id', component: DetailLivraisonComponent},
            {path: 'livreur/:id', component: DetailLivreurComponent},
            {path: '', component: LivraisonsComponent}
        ]
      },

      {
        path: 'produits',
        component: ProduitsComponent,
        children: [
          {path: 'new', component:AddComponent},
          {path: '', redirectTo: '/admin/produits', pathMatch: 'full'}
        ]
      },
      
      {path: '', redirectTo: '/admin/commandes', pathMatch: 'full'}
    ]
  }



  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
