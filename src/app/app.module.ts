import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TypeaheadModule } from 'ng2-bootstrap/typeahead';
import { PopoverModule } from 'ng2-bootstrap/popover';
import { AlertModule } from 'ng2-bootstrap/alert';
import { PubNubAngular } from 'pubnub-angular2';
import { DropdownModule } from 'ng2-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contacts/contact-list.component';
import { ContactDetailComponent } from './contacts/contact-detail.component';
import { ContactCommunicationdetailComponent } from './contacts/contact-communicationdetail.component';
import { SearchComponent } from './search/search.component';

import { ContactService } from './contacts/contact.service';
import { Configuration } from './shared/app.constants'
import { NotificationService } from './shared/notification.service'

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactDetailComponent,
    ContactCommunicationdetailComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    TypeaheadModule.forRoot(),
    DropdownModule.forRoot(),
    PopoverModule.forRoot()
  ],
  providers: [
    Configuration, PubNubAngular,
    ContactService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
