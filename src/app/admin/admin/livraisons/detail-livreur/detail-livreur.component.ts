import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LivraisonService } from 'src/app/admin/admin-services/livraison.service';
import { CommandeService } from 'src/app/service/commande.service';

@Component({
  selector: 'app-detail-livreur',
  templateUrl: './detail-livreur.component.html',
  styleUrls: ['./detail-livreur.component.css']
})
export class DetailLivreurComponent implements OnInit {
  detailLivreur!: any
  tabIdCom: number[]=[];
  constructor(private activatedRoute: ActivatedRoute, private livraisonService: LivraisonService, private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (param: Params) => {
          const id = param['id'];
          this.livraisonService.getOneLivreur(id).subscribe(
            livreur => {
              this.detailLivreur = livreur;
            }
          )  
      }
    )
  }

  //  ************ function *********
  traitement(e: any, idCom: number){
    if (e.target.checked) {
      if (!this.tabIdCom.includes(idCom)) {
          this.tabIdCom.push(idCom);      
      }  
    }
    else if (this.tabIdCom.includes(idCom)) {
      const index: number = this.tabIdCom.indexOf(idCom)
      this.tabIdCom.splice(index, 1);  
    } 

  }

  terminer(id: number){
    // console.log(id);
    const bodyLivreur = {'disponibilite': 'oui'}
    this.livraisonService.changeEtat(bodyLivreur, id).subscribe()
    this.tabIdCom.forEach(elt => {
      const bodyCom = {'etat': 'terminer'}
      this.commandeService.changeEtat(bodyCom, elt).subscribe()
    });
  }

}
