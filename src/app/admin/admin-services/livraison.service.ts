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
  getZones():Observable<any>{
    return this.http.get<any>('http://127.0.0.1:8000/api/zones');
  }
  getLivreurs():Observable<any>{
    return this.http.get<any>('http://127.0.0.1:8000/api/livreurs');
  }
}
