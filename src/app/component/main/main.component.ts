import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  generationDefault: number = 1;
  generations: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  pokemons: any[] = [];
  userInput: string = '';
  searchResults: any[] = [];
  noMatchfoundMessage: string = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemonsByGeneration(1);
  }

  getPokemonsByGeneration(generation: number) {
    this.pokemons = [];

    this.pokemonService
      .getPokemonsByGeneration(generation)
      .subscribe((response) => {
        response.pokemon_species.map((v: { name: string }) =>
          this.getPokemonByName(v.name)
        );
        console.log(response);
      });
  }

  getPokemonByName(name: string) {
    this.pokemonService
      .getPokemonByName(name)
      .subscribe((response) => this.pokemons.push(response));
  }

  changeValue(input: string) {
    this.userInput = input;
    console.log(input);
  }

  searchByNameInPage() {
    if (this.userInput == '') {
      this.searchResults = [];
      this.noMatchfoundMessage = '';
      return;
    }
    this.searchResults = this.pokemons.filter(
      (pokemon) =>
        pokemon.name.substring(0, this.userInput.length) == this.userInput
    );

    if (this.searchResults.length === 0)
      this.noMatchfoundMessage = 'No match found!';
    else this.noMatchfoundMessage = '';
  }

  closeSearchResults() {
    this.searchResults = [];
  }

  sortAtoZ() {
    const sortByAtoZ = (a: { name: number }, b: { name: number }) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    };

    this.pokemons.sort(sortByAtoZ);
  }

  sortByType() {
    const sortType = (
      a: {
        types: any;
        name: string;
      },
      b: {
        types: any;
        name: string;
      }
    ) => {
      if (a.types[0].type.name < b.types[0].type.name) {
        return -1;
      }
      if (a.types[0].type.name > b.types[0].type.name) {
        return 1;
      }
      return 0;
    };

    this.pokemons.sort(sortType);
  }

  sortById() {
    const sortByIdNo = (a: { id: number }, b: { id: number }) => {
      if (a.id < b.id) {
        return -1;
      }
      if (a.id > b.id) {
        return 1;
      }
      return 0;
    };

    this.pokemons.sort(sortByIdNo);
  }
}
