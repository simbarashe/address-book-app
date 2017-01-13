import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Contact } from './contact'
import { Tag } from './tag'

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  @Input()
  contacts: Contact[] = [];

  @Input()
  contact: Contact;

  @Output() contactChanged = new EventEmitter();
  @Output() tagsChanged = new EventEmitter();
  @Output() tagsAdded = new EventEmitter();
  ngOnInit() {
  }

  contactChangedHandler(contact: Contact) {
    this.contactChanged.emit(contact);
  }

  tagsChangedHandler() {
    this.tagsChanged.emit();
  }

  tagsAddedHandler() {
    this.tagsAdded.emit();
  }

}
