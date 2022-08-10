import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { CatalogueService } from 'src/app/service/catalogue.service';
import { CommandeService } from 'src/app/service/commande.service';
import { ZoneService } from 'src/app/service/zone.service';
import { Produits } from '../interfaces/produit.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  // produit!: Produits|undefined; 
  produit!: Produits; 
  param!: number;
  burger!:any
  menu!:any
  taille!:any[]
  nomTaille!:string[]
  boisson:any[]=[]
  fritte:any[]=[]
  complement:any[]=[]
  prod!: any;
  type!: string;
  quantite: number = 0;
  index: number=0;
  tab: number[]=[]
  somQte: number=0;
 
//ActivatedRoute me renvoie les parametre de l'url
  constructor(private paramRoute: ActivatedRoute, private produits: CatalogueService, private route: Router,private cartService: CartService, private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.param = +this.paramRoute.snapshot.params['id'];
    
    this.produits.getProduis().subscribe(
      catalogue => {
        this.burger=catalogue[0];
        this.menu=catalogue[1];
        if(this.produits.findOneBy(this.param, this.burger)){
          this.prod=this.produits.findOneBy(this.param, this.burger); 
        }
        else if(this.produits.findOneBy(this.param, this.menu)){ 
          this.prod=this.produits.findOneBy(this.param, this.menu);
          
          
          for (let index = 0; index < this.prod.menuTailles.length; index++) {
            // console.log(this.prod.menuTailles[0].taille.tailleBoissons);
            const element = this.prod.menuTailles[index];
            this.quantite=element.quantite;
          }
        }
        else
        this.route.navigate(['/produits']);
     }
    )

    // ***************Affichage des complements ****************
    this.produits.getFrittes().subscribe(
      fritte =>{ 
        this.fritte=fritte;       
      }
    )
    this.produits.getBoissons().subscribe(
      taille =>{  
        this.taille=taille
        for (let i = 0; i < taille.length; i++) {
          this.produits.getTailleBoisson(taille[i].id).subscribe(boisson=>{            
           this.boisson=boisson
          })
        }
      }
    )

    // *************** Observable pour l'url ************
      this.getProdSimilaire()
  }


  checkb(e:any){
    if(e.target.checked){ 
      this.index++;
    }
    else{
      this.index--;
    }  
  }

  getProdSimilaire(){
    this.paramRoute.params.subscribe(
      (par: Params)=>{
          const id = +par['id']  
          this.param = +par['id'];
          this.produits.getProduis().subscribe(
          catalogue => {
            this.burger=catalogue[0];
            this.menu=catalogue[1];
            if(this.produits.findOneBy(this.param, this.burger)){
              this.prod=this.produits.findOneBy(this.param, this.burger); 
            }
            else if(this.produits.findOneBy(this.param, this.menu)){ 
              this.prod=this.produits.findOneBy(this.param, this.menu);
              
              for (let index = 0; index < this.prod.menuTailles.length; index++) {
                const element = this.prod.menuTailles[index];
                this.quantite=element.quantite;
              }
            }
            else
            this.route.navigate(['/produits']);
          }
        )
        
      }
    )
  }

  test(e: any){ 
    const nbrElt= e.target.parentElement.parentElement.parentElement.childElementCount;
    this.somQte=0;
    for (let i = 0; i < nbrElt; i++) {
    this.somQte+= +(e.target.parentElement.parentElement.parentElement.children[i].children[0].childNodes[3].value) ;
    }
  }
// *************** functions *****************
  addPanier(produit:any) {
    this.cartService.addProdToCart(produit);
  }

 
}
