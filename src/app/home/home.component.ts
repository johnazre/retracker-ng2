import { Component } from '@angular/core';
import 'rxjs/Rx';

import { LoginComponent } from './login.component';

@Component({
  templateUrl: 'app/home/home.component.html',
  directives: [LoginComponent]
})

export class HomeComponent {
  pageTitle: string = "Home Page"
}
