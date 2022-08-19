import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {

  constructor(private http: HttpClient) { }

  getLivraisons():Observable<any>{
    return this.http.get<any>('http://127.0.0.1:8000/api/livraisons');
  }
  getOneLivraisons(id: number):Observable<any>{
    return this.http.get<any>('http://127.0.0.1:8000/api/livraisons/'+id);
  }
  getZones():Observable<any>{
    return this.http.get<any>('http://127.0.0.1:8000/api/zones');
  }
  getLivreurs():Observable<any>{
    return this.http.get<any>('http://127.0.0.1:8000/api/livreurs');
  }
  getOneLivreur(id: number):Observable<any>{
    return this.http.get<any>('http://127.0.0.1:8000/api/livreurs/'+id);
  }
  
  changeEtat(body: any, id: number):Observable<any>{
    return this.http.put<any>('http://127.0.0.1:8000/api/livreurs/'+id, body)
  }
  changeEtatLivraison(body: any, id: number):Observable<any>{
    return this.http.put<any>('http://127.0.0.1:8000/api/livraisons/'+id, body)
  }
  addBurger(body: any, type: string): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/'+type, body)
  }
 
  
}
