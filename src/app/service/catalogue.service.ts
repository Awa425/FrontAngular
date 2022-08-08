import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Menu, Produits } from '../produits/interfaces/produit.model';

@Injectable({
  providedIn: 'root'
})

export class CatalogueService {
  x!: string
  // private DATA_API = 'api/data.json/'
  private DATA_API = 'http://127.0.0.1:8000/api/catalogue'
  private DATA_FRITTES = 'http://127.0.0.1:8000/api/frittes'
  private DATA_BOISSONS = 'http://127.0.0.1:8000/api/tailles';
  // private DATA_TBoisson = 'http://127.0.0.1:8000/api/tailles/{id}/taille_boissons';
  private ALL_DATA = 'http://127.0.0.1:8000/api/produits'
  private DATA_BOISSON = 'http://127.0.0.1:8000/api/boissons'

  constructor(private MyHttp: HttpClient) { }


getProduis():Observable<any>{
  return this.MyHttp.get<any>(this.DATA_API)
  // .pipe(
  //   tap(produits=>console.log("Produits:", produits)),
  //   catchError(this.handleError)
  // );
}
getFrittes():Observable<any>{
  return this.MyHttp.get<any>(this.DATA_FRITTES)
}
getBoissons():Observable<any>{
  return this.MyHttp.get<any>(this.DATA_BOISSONS)
}
getTailleBoisson(id: number):Observable<any>{
  return this.MyHttp.get<any>('http://127.0.0.1:8000/api/tailles/'+id+'/taille_boissons')
}

getAll(x:string):Observable<any>{
  return this.MyHttp.get<any>(this.ALL_DATA+x)
}
getProduits():Observable<any>{
  return this.MyHttp.get<any>(this.ALL_DATA)
}
getAllBoissons():Observable<any>{
  return this.MyHttp.get<any>(this.DATA_BOISSON)
}


findOneBy(id: number, discrim: Produits[]){
  return discrim.find(
        (p:Produits)=>{ return p.id === id; }
      );
}

getOneBy(id: number, discrim: Produits[]){
   discrim.find(
        (p:Produits)=>{ return p.id === id; }
      );
}

reloadCurrentPage() {
  window.location.reload();
 }

// findAll():Observable<Produits[]>{
//   return this.MyHttp.get<Produits[]>(this.DATAS);
// }

// getMenu():Observable<Produits>{
//   return this.MyHttp.get<Produits>(this.DATA_MENU);
// }

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
