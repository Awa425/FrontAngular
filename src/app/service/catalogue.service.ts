import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Produits } from '../produits/interfaces/produit.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  // private DATA_API = 'api/data.json/'
  private DATA_API = 'http://127.0.0.1:8000/api/catalogue'

  constructor(private MyHttp: HttpClient) { }


getProduis():Observable<any>{
  return this.MyHttp.get<any>(this.DATA_API)
  // .pipe(
  //   tap(produits=>console.log("Produits:", produits)),
  //   catchError(this.handleError)
  // );
}

findOneBy(id: number, discrim: Produits[]){
  return discrim.find(
        (p:Produits)=>{ return p.id === id; }
      );
}



private handleError(error: HttpErrorResponse) {
  if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error);
  }
  // Return an observable with a user-facing error message.
  return throwError(() => new Error('Something bad happened; please try again later.'));
}
 

/**
 * Return All Products
 * @returns products: Produits
 */
  // findAllProduits(){
  //   return this.products
  // }
/**
 * Permet de trouver l'element de l' id en parametre
 * @param id 
 * @returns products: Produits | null
 */
  // findOneBy(id: number): any{
  //   // findOneBy(id: number): Produits|undefined{
  //   const elt = this.products.find(
  //     (p:Produits)=>{ return p.id === id; }
  //   )
  //   console.log(elt);
    
  //   return elt;
  // }

 
}
