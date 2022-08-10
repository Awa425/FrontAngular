import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CommandesComponent } from './commandes/commandes.component';
import { LivraisonsComponent } from './livraisons/livraisons.component';
import { ProduitsComponent } from './produits/produits.component';
import { ListeCommandesComponent } from './commandes/liste-commandes/liste-commandes.component';
import { ZoneCommandesComponent } from './commandes/zone-commandes/zone-commandes.component';
import { DetailLivraisonComponent } from './livraisons/detail-livraison/detail-livraison.component';
import { DetailLivreurComponent } from './livraisons/detail-livreur/detail-livreur.component';
import { AddComponent } from './produits/add/add.component';
import { ListProduitsComponent } from './produits/list-produits/list-produits.component';
import { AdminComponent } from './admin/admin.component';
import { DetailAdminCommComponent } from './commandes/detail-admin-comm/detail-admin-comm.component';


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
    DetailAdminCommComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
