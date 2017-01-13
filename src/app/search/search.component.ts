import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TypeaheadMatch } from 'ng2-bootstrap';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { ContactService } from './../contacts/contact.service';
import { Contact } from './../contacts/contact';
import { Tag } from './../contacts/tag';
import { SearchResult } from './../shared/searchresult';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searchStringChanged = new EventEmitter();
  @Output() contactSelected = new EventEmitter();
  @Output() tagSelected = new EventEmitter();

  public dataSource: Observable<any>;
  public asyncSelected: string = '';
  public typeaheadLoading: boolean = false;
  public typeaheadNoResults: boolean = false;
  searchString: string = '';

  constructor(private _contactService: ContactService) {
    this.dataSource = Observable.create((observer: any) =>
      observer.next(this.asyncSelected))
      .mergeMap((token: string) => {
        this.searchString = token;
        if (token.startsWith('#')) {
          var actualSearchString = token.substr(1, token.length - 2)
          return this.getObservableTags(actualSearchString);
        }
        else {
          return this.getObservableContacts(token);
        }
      });
  }
  ngOnInit() {
  }

  searchStringChange() {
    this.searchStringChanged.emit(this.searchString);
  }

  public getObservableContacts(token: string): Promise<SearchResult[]> {
    return this._contactService.get(token).then(data => {
      return data.map(this.decodeContact);
    })
  }

  public getObservableTags(token: string): Promise<SearchResult[]> {
    return this._contactService.getTags(token).then(data => {
      return data.map(this.decodeTag);
    })
  }

  decodeContact(json: Contact): SearchResult {
    return {
      id: json.id,
      description: json.lastName + ' ' + json.firstName + ' ' + json.designation + ' at ' + json.companyName,
    };
  }

  decodeTag(json: Tag): SearchResult {
    return {
      id: json.id,
      description: json.description,
    };
  }

  public changeTypeaheadLoading(e: boolean): void {
    this.typeaheadLoading = e;
  }

  public changeTypeaheadNoResults(e: boolean): void {
    this.typeaheadNoResults = e;
  }

  public typeaheadOnSelect(e: TypeaheadMatch): void {
    if (this.searchString.startsWith('#')) {
      this.tagSelected.emit(e.item);
    }
    else {
      this.contactSelected.emit(e.item);
    }
  }

}
