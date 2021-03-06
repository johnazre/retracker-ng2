import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { IPurchase } from './purchase';
import { PurchaseService } from './purchases.service';
import { PurchaseAdd } from './purchase-add.component';


@Component({
  templateUrl: 'app/user/purchases/purchases.component.html',
  providers: [PurchaseService],
  directives: [PurchaseAdd]
})

export class PurchasesComponent implements OnInit {
  purchases: string[];

  constructor(private purchaseService: PurchaseService){ }


  ngOnInit(){
    this.purchaseService.getPurchases()
    .subscribe(purchases => this.purchases = purchases);
  }

  pageTitle: string = "Purchases Page"
}
