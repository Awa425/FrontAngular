import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Commande } from '../produits/interfaces/produit.model';
import { CatalogueService } from '../service/catalogue.service';
import { CommandeService } from '../service/commande.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
    commandeClient: any;
    par!: number
    body!: any;
    filtreEnCours : string = ''
    oneCom!: any
    searchText: string=''

  constructor(private commandeService: CommandeService, private paramRoute: ActivatedRoute, private catalogueService: CatalogueService) { }

  ngOnInit(): void { 
    this.filtreEnCours = 'en cours';

    this.commandeService.getCommandeClient(21).subscribe(client => { 
      this.commandeClient=client
    }
      
    )
    this.commandeService.getOne(134).subscribe(com => {
      this.oneCom=com
    }
    )
     
    //***************** */ Annuler Commande ******************
    this.body={
      "etat": "annuler"
    }

    this.searchText=this.catalogueService.myFormateDate();    
    
 
  }



  // *************** FUNCTIONS ******************

  changeEta(id: number, etat: string){ 
    console.log(etat);
      if (etat == 'annuler') {
      const body = {"etat": "en cours"}
         this.commandeService.changeEtat(body, id).subscribe(
          etat => {
          if (etat) {
          window.location.reload();
        }
        }
      ); 
    }
    if (etat == 'en cours') {
      const body = {"etat": "annuler"}
         this.commandeService.changeEtat(body, id).subscribe(
          etat => {
          if (etat) {
          window.location.reload();
        }
        }
      ); 
    }
    
   
  }

}
