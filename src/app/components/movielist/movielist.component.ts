import { Component } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss']
})
export class MovielistComponent {

  constructor(private movieService : MovieService) {

  }

  movieList! : Movie[]

  ngOnInit() {
    this.loadMovie()
  }

  loadMovie() {
    this.movieService.getAll().subscribe({
      next : (data : Movie[]) => { this.movieList = data},
      error : (errorMessage) => { console.log(errorMessage)} ,
      complete : () => {}
    })
  }

  deleteMovie(id : number) {
    this.movieService.delete(id).subscribe({
      next : () => this.loadMovie()
    })
  }
}
