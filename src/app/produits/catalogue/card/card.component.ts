import { Component, Input, OnInit } from '@angular/core';
import { Produits } from '../../interfaces/produit.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() prod!: Produits;

  constructor() { }

  ngOnInit(): void {
  }

  // separateur(name: number, separateur: string): void {
  //   let nom: string = name.toString();
  //   var rege
  // }

}
