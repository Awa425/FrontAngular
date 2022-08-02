import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { CatalogueService } from 'src/app/service/catalogue.service';
import { ZoneService } from 'src/app/service/zone.service';
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
  quantite: number = 0;
  index: number=0;
 
//ActivatedRoute me renvoie les parametre de l'url
  constructor(private paramRoute: ActivatedRoute, private produits: CatalogueService, private route: Router,private cartService: CartService, private zoneService: ZoneService) { }

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
          
          for (let index = 0; index < this.prod.menuTailles.length; index++) {
            const element = this.prod.menuTailles[index];
            this.quantite=element.quantite;
          }
        }
        else
        this.route.navigate(['/produits']);
     }
    )

  }


  checkb(e:any){
    if(e.target.checked){ 
      this.index++;
      console.log(this.index);  
    }
    else{
      this.index--;
      console.log(this.index);
    } 
    
  }

  addPanier(produit:any) {
    this.cartService.addProdToCart(produit);
  }
}
