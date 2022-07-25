import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Produits } from '../produits/interfaces/produit.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor() { }

  // getProduits(): Observable<Produits>{
  //   return of()
  // }

  private products: Produits[] = [
    { 
      id : 1, nom : "Burger simple",prix: 1000, image:"https://source.unsplash.com/1080x720/?burger", etat : true, quantite: 1},
    { id : 2, nom : "Burger double",prix: 2000, image:'https://source.unsplash.com/1080x720/?burger', etat : true, quantite: 2},
    { id : 3, nom : "Burger simple",prix: 1000, image:'https://source.unsplash.com/1080x720/?burger', etat : true, quantite: 1},
    { id : 4, nom : "Burger double",prix: 2000, image:'https://source.unsplash.com/1080x720/?burger', etat : true, quantite: 4},
    { id : 5, nom : "Burger simple",prix: 1000, image:'https://source.unsplash.com/1080x720/?burger', etat : true, quantite: 1},
    { id : 6, nom : "Burger double",prix: 2000, image:'https://source.unsplash.com/1080x720/?burger', etat : true, quantite: 1},
    { id : 7, nom : "Burger simple",prix: 2000, image:'https://source.unsplash.com/1080x720/?burger', etat : true, quantite: 2},
    { id : 8, nom : "Burger simple",prix: 2000, image:'https://source.unsplash.com/1080x720/?burger', etat : true, quantite: 1},
 ];

/**
 * Return All Products
 * @returns products: Produits
 */
  findAllProduits(){
    return this.products
  }
/**
 * Permet de trouver l'element de l' id en parametre
 * @param id 
 * @returns products: Produits | null
 */
  findOneBy(id: number): any{
    const elt = this.products.find(
      (p:Produits)=>{ return p.id === id; }
    )
    // console.log(elt);
    
    return elt;
  }
}
