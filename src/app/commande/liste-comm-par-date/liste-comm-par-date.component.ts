import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/service/commande.service';

@Component({
  selector: 'app-liste-comm-par-date',
  templateUrl: './liste-comm-par-date.component.html',
  styleUrls: ['./liste-comm-par-date.component.css']
})
export class ListeCommParDateComponent implements OnInit {
  commandes: any
  searchText: string=''

  constructor(private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.commandeService.getCommande().subscribe(
      commandes => {
        this.commandes=commandes
        console.log(commandes);
      }
    )
  }

}
