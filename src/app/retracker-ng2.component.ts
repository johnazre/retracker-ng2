import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login.component';
import { UserComponent } from './user/user.component';


@Component({
  moduleId: module.id,
  selector: 'retracker-ng2-app',
  template: `
    <div>
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">{{pageTitle}}</a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
          <ul class="nav navbar-nav">
            <li><a [routerLink]="['/']">Home</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div class='container-fluid outer-outlet'>
        <router-outlet></router-outlet>
    </div>

   </div>`,
  styleUrls: ['retracker-ng2.component.css'],
  directives: [ROUTER_DIRECTIVES]
})

@Routes([
    // these are our two routes
    { path: '/', component: HomeComponent },
    { path: '/login', component: LoginComponent },
    { path: '/user', component: UserComponent }
])

export class RetrackerNg2AppComponent {
  pageTitle = 'RETracker';
}
