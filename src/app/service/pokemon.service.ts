import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseApiUrl: string = "https://pokeapi.co/api/v2/";


  constructor(private httpClient : HttpClient) { }


  getPokemonsByGeneration(generationChoice:number): Observable<any> {
    return this.httpClient.get(`${this.baseApiUrl}generation/${generationChoice}`);
  }

  getPokemonById(id: string | null): Observable<any>{
    return this.httpClient.get(`${this.baseApiUrl}pokemon/${id}`);
  }

  getPokemonByName(name:string): Observable<any>{
    return this.httpClient.get<any>(`${this.baseApiUrl}pokemon/${name}`);
  }

}
