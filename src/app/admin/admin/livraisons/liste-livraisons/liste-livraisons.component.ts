import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LivraisonService } from 'src/app/admin/admin-services/livraison.service';

@Component({
  selector: 'app-liste-livraisons',
  templateUrl: './liste-livraisons.component.html',
  styleUrls: ['./liste-livraisons.component.css']
})
export class ListeLivraisonsComponent implements OnInit {
  data!: any;
  livreur!: any;
  tabIdProd: number[]=[];
  produits: string[] = []
  myZone: number = 0 ;
  myLivreur!: number
  body!: any;
  constructor(private livraisonService: LivraisonService, private http: HttpClient) { }

  ngOnInit(): void {
    this.livraisonService.getZones().subscribe(
      data=>{
        this.data = data;
      }
    )
    this.livraisonService.getLivreurs().subscribe(
      livreur => {
        this.livreur = livreur;
      }
    )  
  }
 
  // ****************** FUNCTION ***********************
  getIdCheck(e: any, idProduit: number){
   if (e.target.checked) {
     if (!this.tabIdProd.includes(idProduit)) {
        this.tabIdProd.push(idProduit);      
     }  
   }
   else if (this.tabIdProd.includes(idProduit)) {
     const index: number = this.tabIdProd.indexOf(idProduit)
     this.tabIdProd.splice(index, 1);  
   }
  
   
  }

  zoneChoice(e: any){
    this.myZone = e  
  }

  livreurCheck(e: any){
    this.myLivreur = e
  }

  livrer(){
    this.tabIdProd.forEach(elt => {
      this.produits.push('/api/commandes/' + elt);
   }) 
   this.body = 
    {
      "livreur": "/api/livreurs/"+this.myLivreur,
      "commande": this.produits
    }
    this.http.post<any>('http://127.0.0.1:8000/api/livraisons', this.body).subscribe();
    window.location.reload();
  }
 
}
