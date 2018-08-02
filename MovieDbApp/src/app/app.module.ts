//Modules
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router'
import {FormsModule} from "@angular/forms"
//Components
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MovieComponent } from './movie/movie.component';
import { SelectedMovieComponent } from './selected-movie/selected-movie.component';
//Services
import { MoviesService } from "./service/movies.service";


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavigationComponent,
    MovieComponent,
    SelectedMovieComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path : '', component : MoviesComponent},
      {path : 'movie/:id', component : SelectedMovieComponent}
    ])
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
