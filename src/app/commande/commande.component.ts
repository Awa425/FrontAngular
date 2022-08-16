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
    oneCom!: any
    searchText: string=''

  constructor(private commandeService: CommandeService, private paramRoute: ActivatedRoute, private catalogueService: CatalogueService) { }

  ngOnInit(): void {    
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
      "etat": "Anuler"
    }

    this.searchText=this.catalogueService.myFormateDate();    
    
 
  }



  // *************** FUNCTIONS ******************

  changeEta(id: number){ 
    this.commandeService.changeEtat(this.body, id).subscribe(
      etat => {
        if (etat) {
          window.location.reload();
        }
      }
    );   
  }
  detail(id: number){
    // console.log(id);
    
  }

}
