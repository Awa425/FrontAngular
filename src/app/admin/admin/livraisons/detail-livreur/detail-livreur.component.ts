import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  constructor(private activatedRoute: ActivatedRoute, private livraisonService: LivraisonService, private commandeService: CommandeService, private router: Router) { }

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
    const bodyLivreur = {'disponibilite': 'oui'}
    this.livraisonService.changeEtat(bodyLivreur, id).subscribe()
    this.tabIdCom.forEach(elt => {
      const bodyCom = {'etat': 'terminer'}
      this.commandeService.changeEtat(bodyCom, elt).subscribe()
      this.router.navigate(['/admin/livraisons'])
    });
  }
  annuler(id: number){
    const bodyLivreur = {'disponibilite': 'oui'}
    this.livraisonService.changeEtat(bodyLivreur, id).subscribe()
    this.tabIdCom.forEach(elt => {
      const bodyCom = {'etat': 'annuler'}
      this.commandeService.changeEtat(bodyCom, elt).subscribe(
        com => {this.router.navigate(['/admin/livraisons'])}
      )
    });
    
  }

}
