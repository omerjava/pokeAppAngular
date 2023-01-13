import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  @Input() pokemonDetails: any = {};

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {}
}
