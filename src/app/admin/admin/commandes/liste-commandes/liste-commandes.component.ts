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
  body!: any;
  constructor(private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.commandeService.getCommande().subscribe(
      commandes => {
        this.commandes=commandes
      }
    )
    this.searchText = this.myFormateDate();    

    this.body={
      "etat": "Anuler"
    } 
  }
// 22/10/2022
  myFormateDate(){
    let date=new Date();   
    let day =date.toLocaleDateString().slice(0,2);
    let month = date.toLocaleDateString().slice(3,5); 
    let year= date.toLocaleDateString().slice(6);    
    return year+"-"+month+"-"+day ;
  }
  changeEta(id: number){ 
    this.commandeService.changeEtat(this.body, id).subscribe();  
    window.location.reload(); 
  }
  

}
