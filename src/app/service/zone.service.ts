import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  private DATA_ZONE = 'http://127.0.0.1:8000/api/zones';

  constructor(private http: HttpClient) { }

  getZone():Observable<any>{
    return this.http.get<any>(this.DATA_ZONE)
  }

}
