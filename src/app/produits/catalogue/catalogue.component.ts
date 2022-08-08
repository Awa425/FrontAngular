import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { CatalogueService } from 'src/app/service/catalogue.service';
import { Burger, Menu, Produits } from '../interfaces/produit.model';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent implements OnInit {
   menu!: any;
   burger!: any;
   type!:number;
   produits!: any
   searchText: string='';

  constructor(private pro: CatalogueService) {}

  ngOnInit(): void {    
    this.pro.getProduis().subscribe(
      catalogue => { 
        // console.log(this.searchText);
        this.produits=catalogue; 
     }
    ) 
  }
}
