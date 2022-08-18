import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LivraisonService } from 'src/app/admin/admin-services/livraison.service';
import { CatalogueService } from 'src/app/service/catalogue.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  typeProduit!: string
    imageSrc!: string;
    myForm = new FormGroup({
      nom: new FormControl(),
      prix: new FormControl(),
      pathFile: new FormControl()
  });

  constructor(private livraisonService: LivraisonService, private serviceCatalogue: CatalogueService, private router: Router) { }
  ngOnInit(): void {
    this.serviceCatalogue.getProduits().subscribe()
  }



  // ************** FUNCTIONS ******************
  typeChoice(e: any){
    console.log(this.typeProduit);
    this.typeProduit=e;    
  }

  get f(){
    return this.myForm.controls;
  }

  onFileChange(event: any) {
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;   
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
        this.myForm.patchValue({
          pathFile: reader.result
        });
      };
    }
  }

  submit(){
    
    this.livraisonService.addBurger(this.myForm.value).subscribe()
      this.router.navigate(['/admin/produits/new'])
  }

}


