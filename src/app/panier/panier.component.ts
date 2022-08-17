import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Produits } from '../produits/interfaces/produit.model';
import { CartService } from '../service/cart.service';
import { CommandeService } from '../service/commande.service';
import { ZoneService } from '../service/zone.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  zones: any
  zo: number=0;
  surPlac: boolean = false;
  body:any

  // bodyCommande: any;
 
  constructor(private dataCart: CartService, private zoneService: ZoneService, private commandeService: CommandeService, private http:HttpClient, private router: Router) { }

  items$?: Observable<any> = this.dataCart.card$;
  qte!: number;
  prixTotal: number=0;
  Total: number=0;
  

  ngOnInit(): void {
    this.qte = this.dataCart.qte;
    this.dataCart.subs().subscribe(data => {
      this.prixTotal = 0
      data.forEach(element => {
        this.prixTotal+=element.prix*element.quantite
      });
    });

  


// *********** GET ZONES *************
    this.zoneService.getZone().subscribe(
      zone => { 
        this.zones = zone;
      }
    )
  }


  // ************ FUNCTIONS PANIER ****************
  addToCart(produit: Produits){
    this.dataCart.addProdToCart(produit);
  }
  removeProd(produit:any) {
    this.dataCart.removeProdToCart(produit)
  }
  diminueQte(produit: Produits){
    this.dataCart.diminueQte(produit);
  }

  // ************ FUNCTIONS COMMANDER ****************
  
  zoneCheck(e:number){
    this.zo=0;
    if (e!=0) {
      this.zo=e
    } 
    // console.log(this.zo);
    return this.zo;
  }

  surPlace(e: any){ 
    this.zo=0;   
    if (e.target.checked) {
      this.surPlac=true;
      this.zo=0;
    }
    else
    this.surPlac=false;
    // console.log(this.zo);
  }
  aLivrer(){
    this.zo=0;
    this.surPlac=false;
  }
  
  commander(){
    this.dataCart.getItems().subscribe(data => {
      // console.log(data);
      
      for (let index = 0; index < data.length; index++) { 
        if (this.zo==0) {
          this.body = {
            "client": {
              "id": 21
            },
            "ligneCommande": [
              {
                "quanite": data[index].quantite,
                "produit": {
                  "id": data[index].id
                }
              }
            ]
          }
        }
        else{
          this.body = {
            "zone":{
              "id": this.zo
            },      
            "client": {
              "id": 21
            },
            "ligneCommande": [
              {
                "quanite": data[index].quantite,
                "produit": {
                  "id": data[index].id
                }
              }
            ]
          }
        }        
        this.http.post<any>('http://127.0.0.1:8000/api/commandes', this.body).subscribe(
          commande => {
            if (commande) {
              this.dataCart.clearCart(data);
            }
          }
          );
          this.router.navigate(['/client/commandes'])
      }
    })
  }

  

}
