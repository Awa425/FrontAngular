import { Injectable } from '@angular/core';
import { BehaviorSubject, map, take } from 'rxjs';
import { Produits } from '../produits/interfaces/produit.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cardSubject = new BehaviorSubject<Produits[]>([]);
  card$ = this.cardSubject.asObservable();
  qte: number = 1;
  prix: number = 0;
  
  constructor() { 
    let cardExist = JSON.parse(localStorage.getItem('products') || '[]');
    if (!cardExist) {
      cardExist = [];
    }
    this.cardSubject.next(cardExist);
  }

  subs(){
    return this.card$;
  }

  addProdToCart(produit: Produits) {
    this. card$.pipe(
      take(1),
      map((produits) => { 
       
        if(!this.findOneBy(produit.id ,produits)){
          produit.quantite = 1;
          // this.prix = this.prix + produit.prix;
          produits.push(produit); 
         } 
        else {
          produits.forEach(prod => {
            if(prod.id == produit.id)
              prod.quantite++
              // this.prix = this.prix + produit.prix;
          })
        }
        this.cardSubject.next(produits);
        localStorage.setItem('products', JSON.stringify(produits));   
      }),
      ).subscribe();
  }

  findOneBy(id: number, produit: Produits[]){
    return produit.find(
          (p:Produits)=>{ return p.id === id; }
        );
  }

  removeProdToCart(produit: Produits) {
    this. card$.pipe(
      take(1),
      map((produits) => {
        produits.splice((produits.indexOf(produit)), 1);  
        localStorage.setItem('products', JSON.stringify(produits));
      }),
      ).subscribe();
  }

// saveEtat(){
//   return localStorage.setItem('products', JSON.stringify(this.transitionTab()[])
// }  

  diminueQte(produit: Produits){
    this. card$.pipe(
      take(1),
      map((produits) => {
        let q= produit.quantite--;
        this.cardSubject.next(produits);
        // console.log(q);  
        localStorage.setItem('products', JSON.stringify(produits));
      }),
      ).subscribe();
   
  }

  getItems() {
    return this. card$;
  } 


  
  // clearCart(card$: Produits[]) {
  //   this.card$ = [];

  //   localStorage.removeItem("cart_items")
  // }


}
