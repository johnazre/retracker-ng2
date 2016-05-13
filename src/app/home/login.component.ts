import { Component } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'retracker-login',
  templateUrl: 'app/home/login.component.html',
  styleUrls: ['app/home/login.component.css'],
  providers: []
})

export class LoginComponent {

  constructor(public router: Router) {
  }

  login(event){
    this.router.navigate(['/user/dashboard'])
  }

  pageTitle: string = "Login/Signup Page"
}
