import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogueService } from 'src/app/service/catalogue.service';
import { Produits } from '../interfaces/produit.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  // produit!: Produits|undefined; 
  produit!: Produits; 
  param!: number;
  burger!:any
  menu!:any
  prod!: any;
 
//ActivatedRoute me renvoie les parametre de l'url
  constructor(private paramRoute: ActivatedRoute, private produits: CatalogueService, private route: Router) { }

  ngOnInit(): void {
    this.param = +this.paramRoute.snapshot.params['id'];
    this.produits.getProduis().subscribe(
      catalogue => {
        this.burger=catalogue[0];
        this.menu=catalogue[1];
        if(this.produits.findOneBy(this.param, this.burger)){
          this.prod=this.produits.findOneBy(this.param, this.burger);
        }
        else if(this.produits.findOneBy(this.param, this.menu)){
          this.prod=this.produits.findOneBy(this.param, this.menu);
        }
        else
        this.route.navigate(['/produits']);
     }
    )
  }

}
