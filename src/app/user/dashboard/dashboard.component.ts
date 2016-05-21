import { Component, OnInit } from '@angular/core';

import { TodoComponent } from './todos/todos.component';
import { TodoAdd } from './todos/todo-add.component';
import { ListingService } from '../listings/listings.service';
import { PurchaseService } from '../purchases/purchases.service';

import 'rxjs/Rx';

@Component({
  templateUrl: 'app/user/dashboard/dashboard.component.html',
  directives: [TodoComponent, TodoAdd]
})

export class DashboardComponent implements OnInit {
    listings: string[];
    purchases: string[];

  
    constructor(private listingService: ListingService,
                private purchaseService: PurchaseService){ }
    
    ngOnInit(){
      this.listingService.getListings()
      .subscribe(listings => this.listings = listings);
      
      this.purchaseService.getPurchases()
      .subscribe(purchases => this.purchases = purchases);
    }
  
  pageTitle: string = 'Dashboard';
}
