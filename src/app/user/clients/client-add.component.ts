import { Component } from '@angular/core';
import 'rxjs/Rx';
import { IClient } from '../clients/client';
import { ClientService } from '../clients/clients.service';

import { FORM_DIRECTIVES } from '@angular/common';

@Component({
  selector: 'client-add',
  templateUrl: 'app/user/clients/client-add.component.html',
  directives: [FORM_DIRECTIVES]
})

export class ClientAdd {  
  client: IClient;
  clients: any;
  
  
  constructor(private clientService: ClientService){ }
   
   addClient(form: any){
     this.client = form;     
     this.clientService.addclient(this.client)
    //  .subscribe(newclient => this.newclient = newclient);
    .then(
      clients => this.clients = clients,
      error => console.log(error));

   }
  
    
 
}
