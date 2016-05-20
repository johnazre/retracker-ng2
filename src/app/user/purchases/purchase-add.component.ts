import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { IPurchase } from './purchase';
import { IClient } from '../clients/client';
import { PurchaseService } from './purchases.service';
import { ClientService } from '../clients/clients.service';

import { FORM_DIRECTIVES } from '@angular/common';

@Component({
  selector: 'purchase-add',
  templateUrl: 'app/user/purchases/purchase-add.component.html',
  directives: [FORM_DIRECTIVES]
})

export class PurchaseAdd implements OnInit{  
  purchase: IPurchase;
  newpurchase: string[];
  purchases: any;
  clients: IClient;
  
  status: string[] = [
      'Pre-signed',
      'Pending',
      'Closed',
      'Cancelled'
    ];
  
  constructor(private purchaseService: PurchaseService, 
              private clientService: ClientService){ }
  
  ngOnInit(){
    this.clientService.getClients()
    .subscribe(clients => this.clients = clients);
  }
  
   addPurchase(form: any){
     this.purchase = form;     
     this.purchaseService.addPurchase(this.purchase)
    //  .subscribe(newpurchase => this.newpurchase = newpurchase);
    .then(
      purchases => this.purchases = purchases,
      error => console.log(JSON.parse(error._body)))

   }
  
    
 
}
