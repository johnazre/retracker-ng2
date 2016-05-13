import { Component } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';
import 'rxjs/Rx';

import { DashboardComponent } from './dashboard/dashboard.component'
import { ClientsComponent } from './clients/clients.component'
import { ListingsComponent } from './listings/listings.component'
import { PurchasesComponent } from './purchases/purchases.component'

@Component({
  selector: 'retracker-user',
  templateUrl: 'app/user/user.component.html',
  styleUrls: ['app/user/user.component.css'],
  directives: [ROUTER_DIRECTIVES]
})

@Routes([
  { path: '/dashboard', component: DashboardComponent },
  { path: '/clients', component: ClientsComponent },
  { path: '/listings', component: ListingsComponent },
  { path: '/purchases', component: PurchasesComponent }
])

export class UserComponent {

  constructor(public router: Router) {
  }

  pageTitle: string = "User Page"
}
