import { Component, OnInit } from '@angular/core';
import { CatalogueService } from 'src/app/service/catalogue.service';
import { Produits } from '../interfaces/produit.model';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent implements OnInit {

   
  //  detail!: number
   products!: Produits[];
   
  constructor(private pro: CatalogueService) {}

  ngOnInit(): void {
    this.products = this.pro.findAllProduits();
    // this.detail = this.pro.findOneBy(6);
    // console.log(this.detail);
    
  }

}
