import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  public connected! : boolean;

  constructor(
    private _customerService : CustomerService,
    private _router : Router
  ){}

  ngOnInit(): void {
    this.connected = sessionStorage.getItem('currentUser') != null;
    this._customerService.isConnected.subscribe(
      {
        next : isConnected => {
          this.connected = isConnected
          if(!isConnected) this._router.navigateByUrl('/customer/login');
        }
      }
    );
  }

  public Logout(){
    this._customerService.Logout();
  }
}
