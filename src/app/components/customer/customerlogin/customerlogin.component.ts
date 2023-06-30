import { CustomerLoginDTO } from './../../../models/customerLoginDTO.models';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.scss']
})
export class CustomerloginComponent implements OnInit{

  public loginForm! : FormGroup;

  constructor(
    private _fb : FormBuilder,
    private _service : CustomerService,
    private _router : Router
    ){}

  ngOnInit(): void {
    this.loginForm = this._fb.group(
      {
        pseudo : [null, [Validators.required]],
        password : [null, [Validators.required, Validators.maxLength(50)]],
      });
    this._service.isConnected.subscribe(
      {
        next : isConnected => this._router.navigateByUrl('/movie/list'),
        error : console.error
      }
    );
  }

  onSubmit(){
    let login : CustomerLoginDTO = {
      pseudo : this.loginForm.get('pseudo')?.value,
      password : this.loginForm.get('password')?.value
    }
    this._service.Login(login);
  }
}
