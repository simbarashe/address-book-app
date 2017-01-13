import { Component, OnInit, Input } from '@angular/core';

import { Contact } from './contact'
import { CommunicationDetail } from './communicationdetail'

@Component({
  selector: 'app-contact-communicationdetail',
  templateUrl: './contact-communicationdetail.component.html',
  styleUrls: ['./contact-communicationdetail.component.css']
})
export class ContactCommunicationdetailComponent implements OnInit {
  @Input()
  contact: Contact;

  constructor() { }

  ngOnInit() {
  }

}
