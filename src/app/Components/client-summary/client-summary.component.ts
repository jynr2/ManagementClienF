import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-client-summary',
  templateUrl: './client-summary.component.html'
})
export class ClientSummaryComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal) { }

  @Input() firstName: any;
  @Input() lastName: any;
  isRead: boolean = true;

  passedData: any;

  ngOnInit(): void {
    console.log(this.passedData)
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

}
