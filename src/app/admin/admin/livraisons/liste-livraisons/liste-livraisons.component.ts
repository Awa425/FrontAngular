import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LivraisonService } from 'src/app/admin/admin-services/livraison.service';
import { CommandeService } from 'src/app/service/commande.service';

@Component({
  selector: 'app-liste-livraisons',
  templateUrl: './liste-livraisons.component.html',
  styleUrls: ['./liste-livraisons.component.css']
})
export class ListeLivraisonsComponent implements OnInit {
  data!: any;
  livreur!: any;
  tabIdProd: number[]=[];
  tabLivraison: any[]=[];
  produits: string[] = []
  myZone: number = 0 ;
  myLivreur!: number
  body!: any;
  etatCom!: any
  etatLivreur!: any;
  filtreLivreurDispo: string=''
  filtreLivreurNonDispo: string=''
  filtreEtatLivraison: string=''
  filtreZone: string=''
  nomLivreur: string=''
  prenomLivreur: string=''
  constructor(private livraisonService: LivraisonService, private http: HttpClient, private commandeService: CommandeService, private router: Router) { }

  ngOnInit(): void {    
    this.filtreLivreurDispo = 'oui' 
    this.filtreZone = 'valider'
    this.filtreLivreurNonDispo = 'non'
    this.filtreEtatLivraison = 'etape 1'

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
    
    this.livraisonService.getLivraisons().subscribe(
      livraison =>{
        this.tabLivraison = livraison        
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

  livreurCheck(id: any, prenom: string, nom: string){
    this.myLivreur = id
    this.nomLivreur = nom
    this.prenomLivreur = prenom

  }

  

  changeEtat(id: number){
    const body = {'disponibilite' : 'oui'}
    this.livraisonService.changeEtat(body, id).subscribe()
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
    
    this.http.post<any>('http://127.0.0.1:8000/api/livraisons', this.body).subscribe(
      result => {
        if(result){
          this.etatCom = {"etat": "en livraison"};
          this.etatLivreur = {"disponibilite": "non"};
          this.tabIdProd.forEach(elt => {
          this.commandeService.changeEtat(this.etatCom,elt).subscribe();
        })
        this.commandeService.changeEtatLivreur(this.etatLivreur,this.myLivreur).subscribe();
        this.router.navigate(['/admin/commandes'])
      } 
    });  
  }

 
}
