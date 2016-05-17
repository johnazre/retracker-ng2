import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PurchaseService {

  constructor(private http: Http) {}

  getPurchases() {
    return this.http.get('http://localhost:8000/api/purchase')
    .map((res: Response) => res.json());
  }

}
