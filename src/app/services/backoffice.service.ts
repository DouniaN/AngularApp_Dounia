import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environoments/environnement';
import { Voiture } from '../models/voiture';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class BackofficeService {

  voitures: Voiture[] = [
    
  ];

  voitureObject={};

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

  add(voiture: any){
    const headers = new HttpHeaders().set("apikey",environment.api.key)
    return this.httpClient.post<Voiture>(environment.api.url+`voiture`, voiture,{'headers':headers})
  }

  update(voiture: any){
    const headers = new HttpHeaders().set("apikey",environment.api.key)
    return this.httpClient.put(environment.api.url+`voiture?id=eq.${voiture.id}`, voiture,{'headers':headers})

  }

 /* update(id:number|null|undefined,credentials: {libelle?: string | null | undefined, couleur?: string | null | undefined,categorie?: string | null | undefined,url?: string | null | undefined}): Observable<Voiture> {
    const headers = new HttpHeaders().set('apikey', environment.api.key);
    return this.httpClient.patch<Voiture>(environment.api.url + 'article?id=eq.'+id,credentials, {headers: headers})
  }*/
  getVoiture(id:number){
    const headers = new HttpHeaders().set("apikey",environment.api.key)
    return this.httpClient.get(environment.api.url+`voiture?id=eq.${id}`,{'headers':headers})
  }
  
  
  

}
