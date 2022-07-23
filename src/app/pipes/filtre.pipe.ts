import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtre'
})
export class FiltrePipe implements PipeTransform {

  //value => Le tab qu'on doit faire le filtre
  //search => Ce qu' il search
  //propriete => sur quelle propriete il veut faire le filtre (nom, titre, etat...)
  
  transform(value: any, search: any, propriete: any): unknown {
    let tabResult = [];

    if(value.lenght === 0 || search.lenght===0){
      return value;
    }
    for(let val of value){
      if(val[propriete]===search){
        tabResult.push(val);
      }
    }
    return tabResult;
  }

}
