import { Component, OnInit } from '@angular/core';
import { CatalogueService } from 'src/app/service/catalogue.service';

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent implements OnInit {
  produits: any = []
  burger: any[] = []
  menu: any[] = []
  fritte: any[] = []
  boisson: any[] = []
  searchText: string = ''
  constructor(private catalogueService: CatalogueService) { }

  ngOnInit(): void {
    this.searchText = 'oui'
    this.catalogueService.getProduits().subscribe(
      produits => {
        for (let i = 0; i < produits.length; i++) {
         if (produits[i].type=='BURGER') {
           this.burger.push(produits[i]);
         }
         if (produits[i].type=='MENU') {
          this.menu.push(produits[i]);
        }
        if (produits[i].type=='FRITTE') {
          this.fritte.push(produits[i]);
        }
        if (produits[i].type=='BOISSON') {
          this.boisson.push(produits[i]);
        }  
          
      }
         this.produits.push(this.burger)
         this.produits.push(this.menu)
         this.produits.push(this.fritte)
         this.produits.push(this.boisson)
      }
      )
      console.log(this.produits)
  }

}
