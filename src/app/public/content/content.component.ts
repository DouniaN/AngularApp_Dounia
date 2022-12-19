import { Component ,OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { Voiture } from '../../models/voiture';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  
  voitures: Voiture[] = [

  ];

  constructor(private ContentService:ContentService){}

  ngOnInit(){
    this.getVoitures();
  }
  
  getVoitures(){
    this.ContentService.findAll().subscribe(voitures => this.voitures = voitures);
  }

  detailsVoiture(id:any){
    this.ContentService.getBy(id).subscribe(()=>{
      this.voitures =this.voitures.filter(voitures =>voitures.id =id);
    })
  }

 

  
}
