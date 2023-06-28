import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { Observable } from 'rxjs';
import { MovieDTO } from '../models/movieDTO.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url : string = "https://localhost:7020/api/movie"

  constructor(
    private httpClient : HttpClient,
    private router : Router
  ) { }

  // getAll() {
  //   this.httpClient.get<Movie[]>(this.url).subscribe({
  //     next : (data : Movie[]) => {console.log(data)},
  //     error : (errorMessage) => { console.log(errorMessage)} ,
  //     complete : () => {}
  //   })
  // }

  getAll() : Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.url)
  }

  post(newMovie : MovieDTO) {
    console.log(newMovie)
    this.httpClient.post(this.url, newMovie).subscribe({
      next : () => { this.router.navigate(['movie'])},
      error : (error) => console.log(error)
    })
  }

  update(updatedMovie : MovieDTO, id : number) {

    this.httpClient.put(this.url + '/'+id, updatedMovie).subscribe({
      next : () => { this.router.navigate(['movie'])},
      error : (error) => console.log(error)
    })
  }

  getById(id : number) : Observable<Movie> {
    return this.httpClient.get<Movie>(this.url+ '/' + id)
  }

  delete(id : number) : Observable<any> {
    return this.httpClient.delete(this.url + '/'+ id)
  }
}
