import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { MovieDTO } from 'src/app/models/movieDTO.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movieupdate',
  templateUrl: './movieupdate.component.html',
  styleUrls: ['./movieupdate.component.scss']
})
export class MovieupdateComponent {
  myFormGroup! : FormGroup

  currentId! : number
  currentMovie! : Movie

  genreList : any[] = [
    {label : "Action", value : 0},
    {label : "Historique", value : 1},
    {label : "Romance", value : 2},
    {label : "Drame", value : 3}
  ]

  constructor(
    private formBuilder : FormBuilder,
    private service : MovieService,
    private ar : ActivatedRoute
  ) {}

  ngOnInit() {
    this.currentId = this.ar.snapshot.params["id"]

    this.service.getById(this.currentId).subscribe({
      next : (data : Movie) =>  {
        this.currentMovie = data

        this.myFormGroup = this.formBuilder.group({
          title : [this.currentMovie.title, Validators.required],
          release : [this.currentMovie.release, [Validators.required, Validators.min(1900)]],
          genre : [this.currentMovie.genre],
          imageUrl : [this.currentMovie.imageUrl],
          trailerUrl : [this.currentMovie.trailerUrl]
        })
      }
    })


  }

  onSubmit() {
    let updatedMovie : MovieDTO = {
      title : this.myFormGroup.value["title"],
      release : this.myFormGroup.value["release"],
      genre : Number.parseInt(this.myFormGroup.value["genre"]),
      imageUrl : this.myFormGroup.value["imageUrl"],
      trailerUrl : this.myFormGroup.value["trailerUrl"]
    }
    this.service.update(updatedMovie, this.currentId)
  }
}
