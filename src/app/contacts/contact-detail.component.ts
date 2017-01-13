import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

import { ContactService } from './contact.service';
import { NotificationService } from '../shared/notification.service';

import { Contact } from './contact'
import { Tag } from './tag'

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  @Input() contact: Contact;
  @Input() tags: Tag[] = [];
  @Output() contactChanged = new EventEmitter();
  @Output() tagAdded = new EventEmitter();
  @Output() tagDeleted = new EventEmitter();
  @Output() tagsChanged = new EventEmitter();
  changeDetection: ChangeDetectionStrategy.OnPush
  public disabled: boolean = false;
  public status: { isopen: boolean } = { isopen: false };
  public contactTags: Tag[] = [];
  backgroundColor: string = ''
  newTag: string = '';
  anyTagsModified: boolean = false;

  constructor(private contactService: ContactService,
    private _notificationService: NotificationService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.getTags();
  }

  contactSelected() {
    this.contactChanged.emit(this.contact); // emit the selected color.
  }

  addTag() {
    this.contactService.addTag(this.newTag)
    this.anyTagsModified = true;
    this.tagAdded.emit(this.newTag);
    this._notificationService.publishMessage(this.newTag);
    this.newTag = '';
  }

  clearBackground() {
    this.backgroundColor = '';
  }

  activateBackground() {
    this.backgroundColor = 'active';
  }

  updateTag(tag: Tag): void {
    this.contactService.updateTag(tag)
    this.anyTagsModified = true;
  }

  deleteTag(id: number): void {
    this.contactService.deleteTag(id)
    this.tags = this.tags.filter(x => {
      return x.id != id;
    })
    this.tagAdded.emit(id);
    this.anyTagsModified = true;
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  public toggled(open: boolean): void {
    if (!open && this.anyTagsModified) {
      this.tagsChanged.emit()
      this.anyTagsModified = false;
    }
  }

  getTags() {

    return this.contactService.getTags().then(tags => {
      this.contact.tags.forEach((contactTag) => {
        tags.filter(element => {
          return element.id == contactTag.tagId;
        }).forEach((assignedTag) => {
          assignedTag.isAssigned = true;
        });
      })
      this.tags = tags;
    });
  }
}
