import { Pipe, PipeTransform } from '@angular/core';
import { CatalogueService } from '../service/catalogue.service';

@Pipe({
  name: 'filtre'
})
export class FiltrePipe implements PipeTransform {


  //value => Le tab qu'on doit faire le filtre
  //search => Ce qu' il faut search
  //propriete => sur quelle propriete on doit faire le filtre (nom, titre, etat...)
  
  transform(value: any, searchText: string, attribu: any): any[] {
      if (value.length ===0 || searchText.length === 0) {
         return value;
      }

      const tab = [];
      for(const val of value){ 
        if (val[attribu].toLowerCase().startsWith(searchText)){
          tab.push(val);
        }
      }
    return tab;
  }
}