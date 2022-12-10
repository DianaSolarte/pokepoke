import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent {
  datosMenu=[{
    'titulo':'Equipo Pokemon',
    'inicio':'Inicio',
    'blog':'Blog',
    'contacto':'Contacto',
},
]};
