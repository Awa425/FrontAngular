import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/service/commande.service';

@Component({
  selector: 'app-liste-commandes',
  templateUrl: './liste-commandes.component.html',
  styleUrls: ['./liste-commandes.component.css']
})
export class ListeCommandesComponent implements OnInit {
  commandes!: any;
  searchText: string ='';
  filtreEnCours : string ='';
  constructor(private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.filtreEnCours = 'en cours'

    this.commandeService.getCommande().subscribe(
      commandes => {
        this.commandes=commandes
      }
    )
    this.searchText = this.myFormateDate();    

  
  }
// 22/10/2022
  myFormateDate(){
    let date=new Date();   
    let day =date.toLocaleDateString().slice(0,2);
    let month = date.toLocaleDateString().slice(3,5); 
    let year= date.toLocaleDateString().slice(6);    
    return year+"-"+month+"-"+day ;
  }
  changeEta(id: number, etat: string){   
    if (etat =='valider') { 
      const body={"etat": "en cours"}
      this.commandeService.changeEtat(body, id).subscribe(
        com => {window.location.reload();}
        // {error: err => console.log(err)}
        );  
        
    }
    if (etat=='en cours') { 
      const body={"etat": "valider"}
      this.commandeService.changeEtat(body, id).subscribe(
        com => {window.location.reload();}
      );  
    }
   
  }
  

}
