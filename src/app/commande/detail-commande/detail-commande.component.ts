import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CommandeService } from 'src/app/service/commande.service';

@Component({
  selector: 'app-detail-commande',
  templateUrl: './detail-commande.component.html',
  styleUrls: ['./detail-commande.component.css']
})
export class DetailCommandeComponent implements OnInit {
  data!:any
  ligneComm!: any
  constructor(private activateRoute: ActivatedRoute, private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(
      (pa: Params)=>{
        const id = pa['id'];
        this.commandeService.getOne(id).subscribe(
          donnees=>{
            // console.log(donnees);
            this.data=donnees;
            this.ligneComm=this.data.ligneCommande
          }
        )  
      }
    )
  }

}
