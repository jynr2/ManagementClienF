import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../Models/Client';
import { CLIENTS } from '../Resources/Clients.json';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  public GetClientByDocumentNumber(documentType: number, document: number) : Client
  {
    let test = documentType.valueOf();
    let client = CLIENTS.filter(c => c.documentType == documentType && c.documentNumber == document);
    return client[0];
  }
}
