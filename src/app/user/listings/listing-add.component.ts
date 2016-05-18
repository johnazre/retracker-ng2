import { Component } from '@angular/core';
import 'rxjs/Rx';
import { IListing } from './listing';

import { FORM_DIRECTIVES } from '@angular/common';

@Component({
  selector: 'listing-add',
  templateUrl: 'app/user/listings/listing-add.component.html',
  directives: [FORM_DIRECTIVES]
})

export class ListingAdd {
  
  hello: any;
  listing: IListing;
  
   consoleIt(form: any){
     console.log(form);
     this.listing = form;
     console.log('this.listing: ', this.listing);
     
   }
  
    
 
}
