import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../Models/Client';
import { CLIENTS } from '../Resources/Clients.json';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  public GetClientByDocumentNumber(document: number) : Client
  {
    let client = CLIENTS.filter(c => c.documentNumber == document);
    return client[0];
  }
}
