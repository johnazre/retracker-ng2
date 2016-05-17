import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { IListing } from './listing';
import { ListingService } from './listings.service';


@Component({
  templateUrl: 'app/user/listings/listings.component.html',
  providers: [ListingService]
})

export class ListingsComponent implements OnInit {
  listings: string[];

  constructor(private listingService: ListingService){ }


  ngOnInit(){
    this.listingService.getListings()
    .subscribe(listings => this.listings = listings);
  }

  pageTitle: string = "Clients Page"
}
