import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  //get pokemon
  getPokemons(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=152')
  }


  //get  more pokemon Data

  getMoreData(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }


}
