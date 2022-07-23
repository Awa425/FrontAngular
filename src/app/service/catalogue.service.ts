import { Injectable } from '@angular/core';
import { Produits } from '../produits/interfaces/produit.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor() { }

  private products: Produits[] = [
    { id : 1, nom : "Burger simple",prix: 1000, image:"https://source.unsplash.com/1080x720/?burger", etat : true},
    { id : 2, nom : "Burger double",prix: 2000, image:'https://source.unsplash.com/1080x720/?burger', etat : true},
    { id : 3, nom : "Burger simple",prix: 1000, image:'https://source.unsplash.com/1080x720/?burger', etat : true},
    { id : 4, nom : "Burger double",prix: 2000, image:'https://source.unsplash.com/1080x720/?burger', etat : true},
    { id : 5, nom : "Burger simple",prix: 1000, image:'https://source.unsplash.com/1080x720/?burger', etat : true},
    { id : 6, nom : "Burger double",prix: 2000, image:'https://source.unsplash.com/1080x720/?burger', etat : true}
 ];

  // get products(){
  //   return this.__products;
  // }
  findAllProduits(){
    return this.products
  }
}
