import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.scss']
})
export class MoviedetailComponent {
  id! : number

  currentMovie! : Movie

  constructor(
    private ar : ActivatedRoute,
    private service : MovieService
  ){}

  ngOnInit() {
    this.id = this.ar.snapshot.params["id"]

    this.service.getById(this.id).subscribe({
      next : (data : Movie) => this.currentMovie = data
    })
  }
}
