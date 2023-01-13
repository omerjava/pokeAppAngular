import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css'],
})
export class PokemonDetailsComponent implements OnInit {
  pokemon: any = {};
  pokemonId: string | null = '';

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.pokemonId = this.route.snapshot.paramMap.get('id');
    this.getPokemonDetails(this.pokemonId);
  }

  getPokemonDetails(id: string | null) {
    this.pokemonService.getPokemonById(id).subscribe((response) => {
      this.pokemon = response;
      console.log(response);
    });
  }
}
