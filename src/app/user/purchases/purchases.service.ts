import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { IPurchase } from './purchase';

@Injectable()
export class PurchaseService {

  constructor(private http: Http) {}

  getPurchases() {
    return this.http.get('http://localhost:8000/api/purchase')
    .map((res: Response) => res.json());
  }
  
  addPurchase(purchase: IPurchase) {
    let headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let body = JSON.stringify(purchase);
    console.log('body: ', body);
    
    // return this.http.post('http://localhost:8000/api/purchase', body, {headers})
    // .map((res: Response) => res.json())
    // .catch(this.handleError);
     
    return this.http.post('http://localhost:8000/api/purchase', body, {headers})
      .toPromise()
      .then( (res: Response) => console.log(res))
      .catch(err => console.log(err));
  }
  
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = error.message || error.statusText || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
