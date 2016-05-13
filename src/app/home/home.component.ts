import { Component } from '@angular/core';
import 'rxjs/Rx';

import { LoginComponent } from './login.component';
import { UserComponent } from '../user/user.component';

@Component({
  templateUrl: 'app/home/home.component.html',
  directives: [LoginComponent]
})

export class HomeComponent {
  pageTitle: string = "Home Page"
}
