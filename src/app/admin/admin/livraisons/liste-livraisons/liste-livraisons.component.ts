import { Component, OnInit } from '@angular/core';
import { LivraisonService } from 'src/app/admin/admin-services/livraison.service';

@Component({
  selector: 'app-liste-livraisons',
  templateUrl: './liste-livraisons.component.html',
  styleUrls: ['./liste-livraisons.component.css']
})
export class ListeLivraisonsComponent implements OnInit {
  data!: any;
  constructor(private livraisonService: LivraisonService) { }

  ngOnInit(): void {
    this.livraisonService.getZones().subscribe(
      data=>{
        this.data = data;
        console.log(data);
        
      }
      
    )
  }

}
