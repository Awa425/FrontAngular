import { Component, OnInit } from '@angular/core';
import { CatalogueService } from 'src/app/service/catalogue.service';

@Component({
  selector: 'app-complement',
  templateUrl: './complement.component.html',
  styleUrls: ['./complement.component.css']
})
export class ComplementComponent implements OnInit {
  fritte!: any[]
  taille!: any[]
  boisson!: any[]
  constructor(private produits: CatalogueService) { }

  ngOnInit(): void {
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
            console.log(boisson[i].boisson.nom);
            
           this.boisson=boisson
          })
        }
      }
    )
  }

}
