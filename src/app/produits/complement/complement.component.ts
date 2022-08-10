import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { CatalogueService } from 'src/app/service/catalogue.service';

@Component({
  selector: 'app-complement',
  templateUrl: './complement.component.html',
  styleUrls: ['./complement.component.css']
})
export class ComplementComponent implements OnInit {
  fritte!: any[]
  taille!: any[]
  boisson!: any[]
  taille1!: any
  taille2!: any
  taille3!: any
  prix!: number
  constructor(private produits: CatalogueService, private cartService: CartService) { }

  ngOnInit(): void {
    this.produits.getFrittes().subscribe(
      fritte =>{  
        this.fritte=fritte;       
      }
    )

    this.produits.getBoissons().subscribe(
      taille =>{    
        this.taille=taille
        
        for (let i = 0; i < taille.length; i++) {
          this.produits.getTailleBoisson(taille[i].id).subscribe(boisson=>{
           this.boisson=boisson
          })
        }
      }
    )

    this.produits.getTailleBoisson(1).subscribe(
      boisson1=>{
        this.taille1=boisson1
        // console.log(this.taille1);
      }
    )
    this.produits.getTailleBoisson(2).subscribe(
      boisson2=>{
        this.taille2=boisson2
      }
    )
    this.produits.getTailleBoisson(3).subscribe(
      boisson3=>{
        this.taille3=boisson3
      }
    )
  }
  addPanier(produit:any) {
    this.cartService.addProdToCart(produit);
  }

}
