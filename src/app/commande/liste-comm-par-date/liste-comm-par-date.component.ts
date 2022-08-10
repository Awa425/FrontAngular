import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CommandeService } from 'src/app/service/commande.service';

@Component({
  selector: 'app-liste-comm-par-date',
  templateUrl: './liste-comm-par-date.component.html',
  styleUrls: ['./liste-comm-par-date.component.css']
})
export class ListeCommParDateComponent implements OnInit {
  commandes: any
  searchText: string=''
  data!:any
  ligneComm!: any
  body!: any;
  
  

  constructor(private commandeService: CommandeService, private activatedRoute: ActivatedRoute) { }

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

  changeEta(id: number){ 
    this.commandeService.changeEtat(this.body, id).subscribe();  
    this.reloadCurrentPage(); 
  }

  reloadCurrentPage() {
    window.location.reload();
   }

   
   myFormateDate(){
    let date=new Date();    
    let day =date.toLocaleDateString().slice(0,2);
    let month = date.toLocaleDateString().slice(3,5); 
    let year= date.toLocaleDateString().slice(6);    
    return year+"-"+month+"-"+day ;
  }

}
