import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from '../produits/add/add.component';
import { AdminComponent } from './admin/admin.component';
import { CommandesComponent } from './admin/commandes/commandes.component';
import { DetailAdminCommComponent } from './admin/commandes/detail-admin-comm/detail-admin-comm.component';
import { ListeCommandesComponent } from './admin/commandes/liste-commandes/liste-commandes.component';
import { ZoneCommandesComponent } from './admin/commandes/zone-commandes/zone-commandes.component';
import { DetailLivraisonComponent } from './admin/livraisons/detail-livraison/detail-livraison.component';
import { DetailLivreurComponent } from './admin/livraisons/detail-livreur/detail-livreur.component';
import { ListeLivraisonsComponent } from './admin/livraisons/liste-livraisons/liste-livraisons.component';
import { LivraisonsComponent } from './admin/livraisons/livraisons.component';
import { ProduitsComponent } from './admin/produits/produits.component';

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
            {path: '', component: ListeLivraisonsComponent}
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
