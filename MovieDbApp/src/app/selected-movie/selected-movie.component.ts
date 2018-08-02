import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-selected-movie',
  templateUrl: './selected-movie.component.html',
  styleUrls: ['./selected-movie.component.css']
})
export class SelectedMovieComponent implements OnInit {
  selectedMovie : Object = {}
  constructor(private route : ActivatedRoute, private moviesService : MoviesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params.id 
      this.moviesService.getMovie(id).subscribe(movieFromDb => {
        this.selectedMovie = movieFromDb
        console.log("this selectedMovie => ", this.selectedMovie);
      })
    })
  }

}
