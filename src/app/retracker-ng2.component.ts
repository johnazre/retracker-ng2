import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';

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
                  <li><a [routerLink]="['/clients']">Clients</a></li>
              </ul>
          </div>
      </nav>
      <div class='container-fluid outer-outlet'>
          <router-outlet></router-outlet>
      </div>
   </div>`,
  styleUrls: ['retracker-ng2.component.css'],
  // add our router directives we will be using
  directives: [ROUTER_DIRECTIVES]
})

@Routes([
    // these are our two routes
    { path: '/', component: HomeComponent },
    { path: '/clients', component: ClientsComponent }
])

export class RetrackerNg2AppComponent {
  pageTitle = 'RETracker';
}
