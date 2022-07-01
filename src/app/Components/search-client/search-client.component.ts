import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DocumentTypesEnum } from 'src/app/Enum/DocumentTypes';
import { Client } from 'src/app/Models/Client';
import { ClienteService } from 'src/app/Services/cliente.service';
import { ClientSummaryComponent } from '../client-summary/client-summary.component';

@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.component.html',
  styleUrls: ['./search-client.component.css']
})
export class SearchClientComponent implements OnInit {
  public stateTypes = Object.values(DocumentTypesEnum).filter(value => typeof value === 'string');
  public client: Client = new Client();
  clientForm : any;
  nnfb = new FormBuilder();

  constructor(private fb: FormBuilder, public modalService: NgbModal, private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      documentType: ['', Validators.required],
      documentNumber : ['', [Validators.required, Validators.min(9999999), Validators.max(99999999999)]]
    });
   }

  ChangeDocumetType(e: any) {
    this.DocumentType?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  get DocumentType() {
    return this.clientForm.get('documentType');
  }

  onSubmit(): void {  
      this.client.documentType = this.clientForm.value.documentType; 
      this.client.documentNumber = this.clientForm.value.documentNumber;   
  }
  

  openModal(): NgbModalRef {
    const modalRef = this.modalService.open(ClientSummaryComponent);
    return modalRef;
  }

  GetClient(){
    let result = this.clienteService.GetClientByDocumentNumber(this.clientForm.value.documentNumber);
    if(result != null){
      let modalInfo = this.openModal();
      modalInfo.componentInstance.firstName = result.firstName;
      modalInfo.componentInstance.lastName = result.lastName;

    }else{
      alert("Client not found")
    }
  }
}


