import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Voiture } from 'src/app/models/voiture';
import { BackofficeService } from 'src/app/services/backoffice.service';
@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent {
 // @Output() credentials =new EventEmitter<{libelle?:string | null | undefined,prix?:string | null | undefined,couleur?:string | null | undefined,image?:string | null | undefined}>();

  AjoutForm = new FormGroup({
    libelle: new FormControl('', [Validators.required]),
    prix: new FormControl('',[Validators.required]),
    couleur: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required])
  })

  MyVoiture:Voiture={
    "couleur":"",
    "prix" :0,
    "libelle" :"",
    "image":""
  }
  voitures: Voiture[] = [
    
  ];
  constructor(private  BackofficeService :BackofficeService){}

  ajouter(){
    console.log(this.AjoutForm.value.libelle);
    //let credentials =  {...this.AjoutForm.value};
    this.BackofficeService.add({...this.AjoutForm.value})
        .subscribe((voitures) => {
          this.voitures=[voitures,...this.voitures]
        })

      alert("Ajout effectué avec success");
      this.AjoutForm.setValue({"couleur":'',"prix":'',"libelle":'','image':''})
  }

  /*editVoiture(voitures: Voiture){

    this.AjoutForm.setValue({"couleur":"","prix":'',"libelle":'','image':''})

  }*/
  
}
