import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LivraisonService } from 'src/app/admin/admin-services/livraison.service';

@Component({
  selector: 'app-detail-livraison',
  templateUrl: './detail-livraison.component.html',
  styleUrls: ['./detail-livraison.component.css']
})
export class DetailLivraisonComponent implements OnInit {
  livraison!: any
  constructor(private activatedRoute: ActivatedRoute, private livraisonService: LivraisonService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (param: Params) => {
        const id = param['id'];
        // console.log(id);
        
        this.livraisonService.getOneLivraisons(id).subscribe(
          livraison => {
            this.livraison = livraison
            console.log(this.livraison.commande[0].client)
          }
          
        )
      }
      
    )
  }

}
