import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { Observable } from 'rxjs';
import { MovieDTO } from '../models/movieDTO.model';
import { Router } from '@angular/router';
import { TokenResult } from '../models/tokenResult.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url : string = "https://localhost:7020/api/movie"

  private get _token(): string | null{
    let currentUser : TokenResult | null = JSON.parse(sessionStorage.getItem("currentUser")??"null");
    return (currentUser == null) ? null : currentUser?.token;
  }

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
    const headers = {'Authorization' : `Bearer ${this._token}`}
    this.httpClient.post(this.url, newMovie, {headers}).subscribe({
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
