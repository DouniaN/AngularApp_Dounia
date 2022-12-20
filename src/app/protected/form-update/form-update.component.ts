import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Voiture } from 'src/app/models/voiture';

import { BackofficeService } from 'src/app/services/backoffice.service';
@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.css']
})
export class FormUpdateComponent implements OnInit {
  updateForm = new FormGroup({
    id:new FormControl(''),
    created_at:new FormControl(''),
    libelle: new FormControl('', [Validators.required]),
    prix: new FormControl('',[Validators.required]),
    couleur: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required])
  })

  constructor(private  BackofficeService :BackofficeService, private router: ActivatedRoute){}
  ngOnInit(): void {
    this.router.params.subscribe((param) => {
      this.BackofficeService.getVoiture(param['id']).subscribe((data:any) => {
        console.log(data)
        this.updateForm.setValue(data[0]);
      })
    })
  }

  updateVoiture() {}

  // voitures: Voiture[] = [
    
  // ]; 

  // a

  // resetFormVoiture(){
  //   this.updateForm.setValue({id:'',"couleur":'',"prix":'',"libelle":'','image':''})
  // }

  // edit(){
  //   console.log(this.updateForm.value);

  //   this.updateForm.setValue({id:'',"couleur":'',"prix":'',"libelle":'','image':''})
  // }

  // updateVoiture(){
  //   this.BackofficeService.update({...this.updateForm.value})
  //   .subscribe((voitures) => {
  //     this.resetFormVoiture();
      
  //   })

   
  // }
}
