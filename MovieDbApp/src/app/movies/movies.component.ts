import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popular: Object;
  theaters: Object;
  kids: Object;
  drama : Object;
  searchRes : Array <Object> = []
  constructor(private moviesService: MoviesService) { }
  search(myQuery){
    let searchItem = myQuery.search
    this.moviesService.findAMovie(searchItem).subscribe(data => {
    this.searchRes = data['results']
    })
  }

  ngOnInit() {
    this.moviesService.getPopular()
      .subscribe(data => {
        this.popular = data
      })
    this.moviesService.getTheatres()
      .subscribe(data => {
        this.theaters = data
      })
    this.moviesService.getKids()
      .subscribe(data => {
        this.kids = data
      })
    this.moviesService.getDrama()
      .subscribe(data => {
        this.drama = data
      })
  }

}
