import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ListingService {

  constructor(private http: Http) {}

  getListings() {
    return this.http.get('http://localhost:8000/api/listing')
    .map((res: Response) => res.json());
  }

}
