import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login.component';


@Component({
  moduleId: module.id,
  selector: 'retracker-ng2-app',
  template: `
    <div>
      <nav class='navbar-inverse navbar-default'>
          <div class='container-fluid'>
              <a class='navbar-brand'>{{pageTitle}}</a>
              <ul class='nav navbar-nav'>
                  <li><a [routerLink]="['/']">Home</a></li>
              </ul>
              <ul class="pull-right navbar-nav nav">
                <li><a [routerLink]="['/login']">Login</a></li>
                <li><a [routerLink]="['/login']">Sign Up</a></li>
              </ul>
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
    { path: '/login', component: LoginComponent }
])

export class RetrackerNg2AppComponent {
  pageTitle = 'RETracker';
}
