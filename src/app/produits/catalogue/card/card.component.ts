import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { CatalogueService } from 'src/app/service/catalogue.service';
import { Produits } from '../../interfaces/produit.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() prod!: any;
  @Input() bool!: boolean;
   test!: Produits

  constructor(private cartService: CartService, private pro: CatalogueService) { }

  ngOnInit(): void {
    this.bool=true    
    this.pro.getProduis().subscribe();

    
  }

  addPanier(produit:any) {
    this.cartService.addProdToCart(produit);
  }
}
