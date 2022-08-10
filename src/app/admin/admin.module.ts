import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CommandesComponent } from './admin/commandes/commandes.component';
import { LivraisonsComponent } from './admin/livraisons/livraisons.component';
import { ProduitsComponent } from './admin/produits/produits.component';
import { ListeCommandesComponent } from './admin/commandes/liste-commandes/liste-commandes.component';
import { ZoneCommandesComponent } from './admin/commandes/zone-commandes/zone-commandes.component';
import { DetailLivraisonComponent } from './admin/livraisons/detail-livraison/detail-livraison.component';
import { DetailLivreurComponent } from './admin/livraisons/detail-livreur/detail-livreur.component';
import { AddComponent } from './admin/produits/add/add.component';
import { ListProduitsComponent } from './admin/produits/list-produits/list-produits.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { DetailAdminCommComponent } from './admin/commandes/detail-admin-comm/detail-admin-comm.component';


@NgModule({
  declarations: [
    CommandesComponent,
    LivraisonsComponent,
    ProduitsComponent,
    ListeCommandesComponent,
    ZoneCommandesComponent,
    DetailLivraisonComponent,
    DetailLivreurComponent,
    AddComponent,
    ListProduitsComponent,
    AdminComponent,
    // DetailAdminCommComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
