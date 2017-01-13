import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Contact } from './contact'
import { Tag } from './tag'
import { CommunicationDetail } from './communicationdetail'
import { Configuration } from './../shared/app.constants'

@Injectable()
export class ContactService {
  headers: Headers;
  options: RequestOptions;
  baseUrl: string = this._configuration.Server + 'api/contacts';
  contactsByIdUrl: string = this.baseUrl + '/contactsbyid';
  contactsByTagIdUrl: string = this.baseUrl + '/contactsbytagid'
  newTagUrl: string = this.baseUrl;
  tagsUrl: string = this.baseUrl + '/tags';

  constructor(private _http: Http, private _configuration: Configuration) {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    this.options = new RequestOptions({ headers: this.headers });
  }

  get(query = ''): Promise<Contact[]> {
    let url = this.baseUrl;
    if (query) {
      url += '/' + query;
    }
    return this._http.get(url)
      .toPromise()
      .then(response => this.extractArray(response))
      .catch(this.handleErrorPromise);
  }

  getContactsById(query: number): Promise<Contact[]> {
    let url = this.contactsByIdUrl;
    if (query) {
      url += '/' + query;
    }
    return this._http.get(url)
      .toPromise()
      .then(response => this.extractArray(response))
      .catch(this.handleErrorPromise);
  }

  getContactsByTagId(query: number): Promise<Contact[]> {
    let url = this.contactsByTagIdUrl;
    if (query) {
      url += '/' + query;
    }
    return this._http.get(url)
      .toPromise()
      .then(response => this.extractArray(response))
      .catch(this.handleErrorPromise);
  }

  getTags(query = ''): Promise<Tag[]> {
    let url = this.tagsUrl;
    if (query) {
      url += '/' + query;
    }
    return this._http.get(url)
      .toPromise()
      .then(response => this.extractArray(response))
      .catch(this.handleErrorPromise);
  }

  addTag(description: string): Promise<void> {
    let tag = { description: description, isAssigned: false };
    let body = JSON.stringify(tag);
    return this._http.post(this.newTagUrl, body, this.options)
      .toPromise()
      .catch(this.handleErrorPromise);
  }

  updateTag(tag: Tag): Promise<void> {
    let body = JSON.stringify(tag);
    return this._http.put(this.newTagUrl, body, this.options)
      .toPromise()
      .then(response => this.extractArray(response))
      .catch(this.handleErrorPromise);
  }

  deleteTag(id: number): Promise<void> {
    return this._http.delete(this.baseUrl + '/' + id, this.options)
      .toPromise()
      .then(response => this.extractArray(response))
      .catch(this.handleErrorPromise);
  }

  protected extractArray(res: Response, showprogress: boolean = true) {
    let data = res.json();
    return data || [];
  }

  protected handleErrorPromise(error: any): Promise<void> {
    try {
      error = JSON.parse(error._body);
    } catch (e) {
    }

    let errMsg = error.errorMessage
      ? error.errorMessage
      : error.message
        ? error.message
        : error._body
          ? error._body
          : error.status
            ? `${error.status} - ${error.statusText}`
            : 'unknown server error';

    console.error(errMsg);
    return Promise.reject(errMsg);
  }
}
