import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CommandeService } from 'src/app/service/commande.service';

@Component({
  selector: 'app-detail-admin-comm',
  templateUrl: './detail-admin-comm.component.html',
  styleUrls: ['./detail-admin-comm.component.css']
})
export class DetailAdminCommComponent implements OnInit {
  data!:any
  ligneComm!: any
  constructor(private activateRoute: ActivatedRoute, private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(
      (pa: Params)=>{
        const id = pa['id'];
        this.commandeService.getOne(id).subscribe(
          donnees=>{
            this.data=donnees;
            this.ligneComm=this.data.ligneCommande
            console.log(this.ligneComm);
          }
        )  
      }
    )
  }

}
