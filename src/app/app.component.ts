import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'pokedex';

  datosMenu = [{
    'titulo':'Equipo Pokemon',
    'icon':'fa-regular fa-cards-blank',
    'url':''
}];

}
