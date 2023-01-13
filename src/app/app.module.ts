import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainComponent } from './component/main/main.component';
import { PokemonDetailsComponent } from './component/pokemon-details/pokemon-details.component';
import { PokemonComponent } from './component/pokemon/pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PokemonDetailsComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
