import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieDTO } from 'src/app/models/movieDTO.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movieadd',
  templateUrl: './movieadd.component.html',
  styleUrls: ['./movieadd.component.scss']
})
export class MovieaddComponent {

  myFormGroup! : FormGroup

  genreList : any[] = [
    {label : "Action", value : 0},
    {label : "Historique", value : 1},
    {label : "Romance", value : 2},
    {label : "Drame", value : 3}
  ]

  constructor(
    private formBuilder : FormBuilder,
    private service : MovieService
  ) {}

  ngOnInit() {
    this.myFormGroup = this.formBuilder.group({
      title : [null, Validators.required],
      release : [null, [Validators.required, Validators.min(1900)]],
      genre : [],
      imageUrl : [],
      trailerUrl : []
    })
  }

  onSubmit() {
    let newMovie : MovieDTO = {
      title : this.myFormGroup.value["title"],
      release : this.myFormGroup.value["release"],
      genre : Number.parseInt(this.myFormGroup.value["genre"]),
      imageUrl : this.myFormGroup.value["imageUrl"],
      trailerUrl : this.myFormGroup.value["trailerUrl"]
    }
    this.service.post(newMovie)
  }
}
