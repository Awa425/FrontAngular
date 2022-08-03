import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, take, throwError } from 'rxjs';
import { Commande } from '../produits/interfaces/produit.model';

@Injectable({
  providedIn: 'root'
})

export class CommandeService {
  private qteSubject = new BehaviorSubject<number[]>([]);
  qteChoisi = this.qteSubject.asObservable();
  qteCheck: number=0;

  private DATA_COMMANDES = 'http://127.0.0.1:8000/api/commandes';

  constructor(private http: HttpClient) {
    let qteExist = JSON.parse(localStorage.getItem('qteChoisi') || '[]');
    if (!qteExist) {
      qteExist = [];
    }
    this.qteSubject.next(qteExist);
   }

  addCommande(commande: any): Observable<any> {
    return this.http.post<any>(this.DATA_COMMANDES, commande)
  }

  getCommande():Observable<any>{
    return this.http.get<any>(this.DATA_COMMANDES)
  }

  getCommandeClient(id: number):Observable<any>{
    return this.http.get<any>('http://127.0.0.1:8000/api/clients/'+id+'/commandes')
  }
 
  getQteBoissonChoisi(qte: number){
  return localStorage.setItem('QteChoisi', JSON.stringify(qte))
} 

changeEtat(body: any, id: number):Observable<any>{
  return this.http.patch<any>('http://127.0.0.1:8000/api/commandes/'+id, body)
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
}
