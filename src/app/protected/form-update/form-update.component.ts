import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Voiture } from 'src/app/models/voiture';

import { BackofficeService } from 'src/app/services/backoffice.service';
@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.css']
})
export class FormUpdateComponent {
  updateForm = new FormGroup({
    id:new FormControl(),
    libelle: new FormControl('', [Validators.required]),
    prix: new FormControl('',[Validators.required]),
    couleur: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required])
  })

  constructor(private  BackofficeService :BackofficeService){}

  voitures: Voiture[] = [
    
  ]; 

  resetFormVoiture(){
    this.updateForm.setValue({id:'',"couleur":'',"prix":'',"libelle":'','image':''})
  }

  edit(){
    console.log(this.updateForm.value);

    this.updateForm.setValue({id:'',"couleur":'',"prix":'',"libelle":'','image':''})
  }

  updateVoiture(){
    this.BackofficeService.update({...this.updateForm.value})
    .subscribe((voitures) => {
      this.resetFormVoiture();
      
    })

   
  }
}
