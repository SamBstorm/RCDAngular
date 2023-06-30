import { CustomerLoginDTO } from './../models/customerLoginDTO.models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenResult } from '../models/tokenResult.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private _url : string = "https://localhost:7020/api/customer";

  public isConnected : Subject<boolean> = new Subject<boolean>(); 

  constructor(private _http : HttpClient) {

  }

  public Login(login : CustomerLoginDTO){
    this._http.post<TokenResult>(this._url+'/login',login)
      .subscribe({
        next : tokenResult =>{
          sessionStorage.setItem('currentUser',JSON.stringify(tokenResult));
          this.isConnected.next(true);
        },
        error : error => console.error(error)
      });
  }

  public Logout(){
    sessionStorage.clear();
    this.isConnected.next(false);
  }
}
