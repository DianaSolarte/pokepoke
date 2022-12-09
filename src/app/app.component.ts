import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {
  title = 'pokedex';

  handleSearch(value:string){
  console.log(value)
  }

  constructor(
    private _http: HttpClient

  ){}

  ngOnInit(){


  }

}
