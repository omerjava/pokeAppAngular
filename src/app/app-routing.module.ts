import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { PokemonDetailsComponent } from './component/pokemon-details/pokemon-details.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'pokemon/:id', component: PokemonDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
