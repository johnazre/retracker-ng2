import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {

  constructor(private http: Http) {}

  getTodos() {
    return this.http.get('http://localhost:8000/api/todo')
    .map((res: Response) => res.json());
  }

}
