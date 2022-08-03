import { Component, OnInit } from '@angular/core';
import { Commande } from '../produits/interfaces/produit.model';
import { CommandeService } from '../service/commande.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
    commandeClient: any;
    body!: any;

  constructor(private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.commandeService.getCommandeClient(21).subscribe(client => 
      // console.log(client)    
      this.commandeClient=client, 
    )
    this.body={
      "etat": "Anuler"
    }
  }
  
  changeEta(id: number){
    console.log(id);
    
    this.commandeService.changeEtat(this.body, 95).subscribe();
      
  }

}
