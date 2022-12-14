import { Component, OnInit } from '@angular/core';
//import { ConsoleReporter } from 'jasmine';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent implements OnInit{
  pokemons: any[] = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit():void{
    this.dataService.getPokemons()
    .subscribe((response:any)=>{
      /* this.totalPokemons=response.count; */

      response.results.forEach((result: { name: string; }) => {
        this.dataService.getMoreData(result.name)
        .subscribe((response:any)=>{
          /* this.pokemons.push(response); */
          let type='';

          response.types.forEach((element: any) => {
            type=type+element.type.name.charAt(0).toUpperCase()+element.type.name.slice(1)+' '
          });

          this.pokemons.push({
              'name':response.name.charAt(0).toUpperCase()+response.name.slice(1),
              'order':response.order,
              'img':response.sprites.front_default,
              'height':response.height,
              'health':response.stats[0].base_stat,
              'atack':response.stats[1].base_stat,
              'types':type});
        })
      });
    });
}
}
