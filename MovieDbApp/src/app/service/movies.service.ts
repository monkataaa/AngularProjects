import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
const apiKey = '8f4624926ea5f65a61f1e64b29232a29'
@Injectable()

export class MoviesService {
  path : string = 'https://api.themoviedb.org/3/';
  popular : string = 'discover/movie?sort_by=popularity.desc';
  theaters : string = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22'
  kids : string = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc'
  drama : string = 'discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10'
  movie : string = `movie/`
  authentication : string = '&api_key=';
  movieAuth : string = `?api_key=`
  constructor(private HttpClient : HttpClient) { }

  getPopular() : Observable<Object> {
    return this.HttpClient.get(`${this.path}${this.popular}${this.authentication}${apiKey}`)
  }
  getTheatres() : Observable<Object> {
    return this.HttpClient.get(`${this.path}${this.theaters}${this.authentication}${apiKey}`)
  }
  getKids() : Observable<Object> {
    return this.HttpClient.get(`${this.path}${this.kids}${this.authentication}${apiKey}`)
  }
  getDrama() : Observable<Object> {
    return this.HttpClient.get(`${this.path}${this.drama}${this.authentication}${apiKey}`)
  }

  getMovie(id) : Observable<Object> {
    console.log(`${this.path}${this.movie}`+id+`${this.authentication}${apiKey}`);
    return this.HttpClient.get(`${this.path}${this.movie}`+id+`${this.movieAuth}${apiKey}`)
  }

  findAMovie(searchItem){
    return this.HttpClient.get(`${this.path}search/movie?api_key=${apiKey}&query=${searchItem}`)
  }
}
