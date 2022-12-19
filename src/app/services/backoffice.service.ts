import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environoments/environnement';
import { Voiture } from '../models/voiture';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BackofficeService {

  voitures: Voiture[] = [
    
  ];

  
  constructor(private httpClient:HttpClient) { }

  //getData

  findAll():Observable<Voiture[]>{
    const headers = new HttpHeaders().set("apikey",environment.api.key)
    return this.httpClient.get<Voiture[]>(environment.api.url+'voiture',{'headers':headers});
  }

  delete(id:number){
    const headers = new HttpHeaders().set("apikey",environment.api.key)
    return this.httpClient.delete(environment.api.url+`voiture?id=eq.${id}`,{'headers':headers})
  }

}
