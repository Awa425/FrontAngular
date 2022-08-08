import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Commande } from '../produits/interfaces/produit.model';
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


  constructor(private commandeService: CommandeService, private paramRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.par = +this.paramRoute.snapshot.params; console.log(this.par);
    
    this.commandeService.getCommandeClient(21).subscribe(client => { 
      this.commandeClient=client
      // console.log(this.commandeClient)
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

    
 
  }



  // *************** FUNCTIONS ******************

  changeEta(id: number){ 
    this.commandeService.changeEtat(this.body, id).subscribe();   
  }
  detail(id: number){
    // console.log(id);
    
  }

}
