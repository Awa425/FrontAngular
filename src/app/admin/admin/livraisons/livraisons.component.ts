import { Component, OnInit } from '@angular/core';
import { LivraisonService } from '../../admin-services/livraison.service';

@Component({
  selector: 'app-livraisons',
  templateUrl: './livraisons.component.html',
  styleUrls: ['./livraisons.component.css']
})
export class LivraisonsComponent implements OnInit {
  tabLivraison: any[]=[];
  constructor(private livraisonService: LivraisonService) { }

  ngOnInit(): void {
    this.livraisonService.getLivraisons().subscribe(
      livraison =>{
        this.tabLivraison = livraison        
      }
    )
  }

}
