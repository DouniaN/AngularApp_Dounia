import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environoments/environnement';
import { Voiture } from '../models/voiture';


@Injectable({
  providedIn: 'root'
})
export class ContentService {
  
  voitures: Voiture[] = [
    
  ];

  constructor(private httpClient:HttpClient) { }

  //getData

  findAll():Observable<Voiture[]>{
    const headers = new HttpHeaders().set("apikey",environment.api.key)
    return this.httpClient.get<Voiture[]>(environment.api.url+'voiture',{'headers':headers});
  }

}




