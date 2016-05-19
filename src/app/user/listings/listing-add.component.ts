import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { IListing } from './listing';
import { IClient } from '../clients/client';
import { ListingService } from './listings.service';
import { ClientService } from '../clients/clients.service';

import { FORM_DIRECTIVES } from '@angular/common';

@Component({
  selector: 'listing-add',
  templateUrl: 'app/user/listings/listing-add.component.html',
  directives: [FORM_DIRECTIVES]
})

export class ListingAdd implements OnInit{  
  listing: IListing;
  newListing: string[];
  listings: any;
  clients: IClient;
  
  
  constructor(private listingService: ListingService, 
              private clientService: ClientService){ }
  
  ngOnInit(){
    this.clientService.getClients()
    .subscribe(clients => this.clients = clients);
  }
  
   addListing(form: any){
     this.listing = form;     
     this.listingService.addListing(this.listing)
    //  .subscribe(newListing => this.newListing = newListing);
    .then(
      listings => this.listings = listings,
      error => console.log(error));

   }
  
    
 
}
