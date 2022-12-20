import { Component } from '@angular/core';
import { Voiture } from '../../models/voiture';
import { BackofficeService } from 'src/app/services/backoffice.service';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss']
})

export class BackofficeComponent {

  voitures: Voiture[] = [

  ];

  constructor(private ContentService:BackofficeService){}

  ngOnInit(){
    this.getVoitures();
  }
  
  getVoitures(){
    this.ContentService.findAll().subscribe(voitures => this.voitures = voitures);
  }

  deleteVoiture(id:any){
    this.ContentService.delete(id).subscribe(()=>{
      this.voitures =this.voitures.filter(voitures =>voitures.id !=id);
    })
  }

  edit(id:any){
    // this.ContentService.editVoiture(id).subscribe(()=>{
      
    // })
  }

  
}
