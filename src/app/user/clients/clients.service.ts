import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ClientService {

  constructor(private http: Http) {}

  getClients() {
    return this.http.get('http://localhost:8000/api/client')
    .map((res: Response) => res.json());
  }

}
