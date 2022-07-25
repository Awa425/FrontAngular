import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogueService } from 'src/app/service/catalogue.service';
import { Produits } from '../interfaces/produit.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  produit!: Produits; 
  param: number=0;
 
//ActivatedRoute me renvoie les parametre de l'url
  constructor(private paramRoute: ActivatedRoute, private produits: CatalogueService) { }

  ngOnInit(): void {
    this.param = this.paramRoute.snapshot.params['id'];
    this.produit = this.produits.findOneBy(+this.param);
    console.log(this.produit);
    
  }

}
