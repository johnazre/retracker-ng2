import { Component } from "@angular/core";
import 'rxjs/Rx';
import { IClient } from './client';


@Component({
  selector: 'simplre-clients',
  template: `
    <div>
      Clients Page
   </div>
   `
 })

export class ClientsComponent {
  pageTitle: string = "Clients Page"
}
