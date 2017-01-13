import { Component, OnInit, Renderer, ViewChild, ElementRef } from '@angular/core';
import { PubNubAngular } from 'pubnub-angular2';

import { Contact } from './contacts/contact'
import { Tag } from './contacts/tag'
import { ContactService } from './contacts/contact.service';
import { NotificationService } from './shared/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Address Book App';
  status: { isopen: boolean } = { isopen: false };
  message: string = '';
  contact: Contact;
  contacts: Contact[] = [];
  tags: Tag[] = [];
  noOfContacts: number = 0;

  @ViewChild('notifier') notifier: ElementRef;

  constructor(private _contactService: ContactService,
    private renderer: Renderer,
    private _notificationService: NotificationService
  ) {
  }

  getContacts(query = '') {
    return this._contactService.get(query).then(contacts => {
      this.contacts = contacts;
      this.contact = contacts.filter(x => true)[0];
      this.noOfContacts = contacts.length;
    });
  }

  getContactsById(query: number) {
    return this._contactService.getContactsById(query).then(contacts => {
      this.contacts = contacts;
      this.contact = contacts.filter(x => true)[0];
      this.noOfContacts = contacts.length;
    });
  }

  getContactsByTagId(query: number) {
    return this._contactService.getContactsByTagId(query).then(contacts => {
      this.contacts = contacts;
      this.contact = contacts.filter(x => true)[0];
      this.noOfContacts = contacts.length;
    });
  }

  getTags() {
    return this._contactService.getTags().then(tags => {
      this.tags = tags;
    });
  }

  public notifyUser(msg: any) {
    this.message = `New tag: ${msg.message.body}`;
    this.renderer.invokeElementMethod(this.notifier.nativeElement, 'click');
    setTimeout(() => {
      if (this.status.isopen) {
        this.status.isopen = !this.status.isopen;
        this.renderer.invokeElementMethod(this.notifier.nativeElement, 'click')
      }
    }, 3000);
  }

  updateStatus(event) {
    this.status.isopen = !this.status.isopen;
  }

  setupNotification() {
    this._notificationService.subscribeToChannel();
  }

  processNotification() {
    this._notificationService.getMessage((message) => this.notifyUser(message));
  }

  ngOnInit() {
    this.getContacts()
  }

  ngAfterViewInit() {
    this.setupNotification();
    this.processNotification();
  }

  contactChangedHandler(contact: Contact) {
    this.contact = contact;
  }

  selectedContactHandler(contact: Contact) {
    this.getContactsById(contact.id)
  }

  selectedTagHandler(tag: Tag) {
    this.getContactsByTagId(tag.id)
  }

  tagsChangedHandler() {
    this.getContacts();
  }

  tagsAddedHandler() {
    this.processNotification();
  }
}
