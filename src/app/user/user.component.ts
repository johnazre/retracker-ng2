import { Component } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/Rx';

@Component({
  templateUrl: 'app/user/user.component.html',
  styleUrls: ['app/user/user.component.css'],
  providers: []
})

export class UserComponent {

  constructor(public router: Router) {
  }

  login(event){
    console.log(event)
    console.log(this.router)
  }

  pageTitle: string = "User Page"
}
