webpackJsonp([0,3],{

/***/ 138:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_app_constants__ = __webpack_require__(317);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContactService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactService = (function () {
    function ContactService(_http, _configuration) {
        this._http = _http;
        this._configuration = _configuration;
        this.baseUrl = this._configuration.Server + 'api/contacts';
        this.contactsByIdUrl = this.baseUrl + '/contactsbyid';
        this.contactsByTagIdUrl = this.baseUrl + '/contactsbytagid';
        this.newTagUrl = this.baseUrl;
        this.tagsUrl = this.baseUrl + '/tags';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: this.headers });
    }
    ContactService.prototype.get = function (query) {
        var _this = this;
        if (query === void 0) { query = ''; }
        var url = this.baseUrl;
        if (query) {
            url += '/' + query;
        }
        return this._http.get(url)
            .toPromise()
            .then(function (response) { return _this.extractArray(response); })
            .catch(this.handleErrorPromise);
    };
    ContactService.prototype.getContactsById = function (query) {
        var _this = this;
        var url = this.contactsByIdUrl;
        if (query) {
            url += '/' + query;
        }
        return this._http.get(url)
            .toPromise()
            .then(function (response) { return _this.extractArray(response); })
            .catch(this.handleErrorPromise);
    };
    ContactService.prototype.getContactsByTagId = function (query) {
        var _this = this;
        var url = this.contactsByTagIdUrl;
        if (query) {
            url += '/' + query;
        }
        return this._http.get(url)
            .toPromise()
            .then(function (response) { return _this.extractArray(response); })
            .catch(this.handleErrorPromise);
    };
    ContactService.prototype.getTags = function (query) {
        var _this = this;
        if (query === void 0) { query = ''; }
        var url = this.tagsUrl;
        if (query) {
            url += '/' + query;
        }
        return this._http.get(url)
            .toPromise()
            .then(function (response) { return _this.extractArray(response); })
            .catch(this.handleErrorPromise);
    };
    ContactService.prototype.addTag = function (description) {
        var tag = { description: description, isAssigned: false };
        var body = JSON.stringify(tag);
        return this._http.post(this.newTagUrl, body, this.options)
            .toPromise()
            .catch(this.handleErrorPromise);
    };
    ContactService.prototype.updateTag = function (tag) {
        var _this = this;
        var body = JSON.stringify(tag);
        return this._http.put(this.newTagUrl, body, this.options)
            .toPromise()
            .then(function (response) { return _this.extractArray(response); })
            .catch(this.handleErrorPromise);
    };
    ContactService.prototype.deleteTag = function (id) {
        var _this = this;
        return this._http.delete(this.baseUrl + '/' + id, this.options)
            .toPromise()
            .then(function (response) { return _this.extractArray(response); })
            .catch(this.handleErrorPromise);
    };
    ContactService.prototype.extractArray = function (res, showprogress) {
        if (showprogress === void 0) { showprogress = true; }
        var data = res.json();
        return data || [];
    };
    ContactService.prototype.handleErrorPromise = function (error) {
        try {
            error = JSON.parse(error._body);
        }
        catch (e) {
        }
        var errMsg = error.errorMessage
            ? error.errorMessage
            : error.message
                ? error.message
                : error._body
                    ? error._body
                    : error.status
                        ? error.status + " - " + error.statusText
                        : 'unknown server error';
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    ContactService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_app_constants__["a" /* Configuration */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_app_constants__["a" /* Configuration */]) === 'function' && _b) || Object])
    ], ContactService);
    return ContactService;
    var _a, _b;
}());
//# sourceMappingURL=F:/Projects/Tutorials/angular2/contacts-app/src/contact.service.js.map

/***/ },

/***/ 206:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Contact; });
var Contact = (function () {
    function Contact() {
        this.communicationDetails = [];
        this.tags = [];
    }
    return Contact;
}());
//# sourceMappingURL=F:/Projects/Tutorials/angular2/contacts-app/src/contact.js.map

/***/ },

/***/ 207:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pubnub_angular2__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pubnub_angular2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pubnub_angular2__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NotificationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationService = (function () {
    function NotificationService(_pubNubService) {
        this._pubNubService = _pubNubService;
        this.channel = 'address-book-channel';
        _pubNubService.init({
            publishKey: 'pub-c-08a0547f-e75c-4ecd-b2fb-91bd0a853582',
            subscribeKey: 'sub-c-e686948e-d7dc-11e6-984c-02ee2ddab7fe'
        });
    }
    NotificationService.prototype.publishMessage = function (message) {
        this._pubNubService.publish({ channel: this.channel, message: { 'body': message } }, function (response) {
            console.log(response);
        });
    };
    NotificationService.prototype.subscribeToChannel = function () {
        this._pubNubService.subscribe({ channels: [this.channel], triggerEvents: true, withPresence: true });
        console.log('subscribed to channel:');
    };
    NotificationService.prototype.getMessage = function (callback) {
        this._pubNubService.getMessage(this.channel, function (message) { return callback(message); });
    };
    NotificationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_pubnub_angular2__["PubNubAngular"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_pubnub_angular2__["PubNubAngular"]) === 'function' && _a) || Object])
    ], NotificationService);
    return NotificationService;
    var _a;
}());
//# sourceMappingURL=F:/Projects/Tutorials/angular2/contacts-app/src/notification.service.js.map

/***/ },

/***/ 317:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Configuration; });
var Configuration = (function () {
    function Configuration() {
        this.Server = 'http://addressbookapi.azurewebsites.net/';
    }
    return Configuration;
}());
//# sourceMappingURL=F:/Projects/Tutorials/angular2/contacts-app/src/app.constants.js.map

/***/ },

/***/ 376:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 376;


/***/ },

/***/ 377:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(486);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=F:/Projects/Tutorials/angular2/contacts-app/src/main.js.map

/***/ },

/***/ 485:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contacts_contact_service__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_notification_service__ = __webpack_require__(207);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(_contactService, renderer, _notificationService) {
        this._contactService = _contactService;
        this.renderer = renderer;
        this._notificationService = _notificationService;
        this.title = 'Address Book App';
        this.status = { isopen: false };
        this.message = '';
        this.contacts = [];
        this.tags = [];
        this.noOfContacts = 0;
    }
    AppComponent.prototype.getContacts = function (query) {
        var _this = this;
        if (query === void 0) { query = ''; }
        return this._contactService.get(query).then(function (contacts) {
            _this.contacts = contacts;
            _this.contact = contacts.filter(function (x) { return true; })[0];
            _this.noOfContacts = contacts.length;
        });
    };
    AppComponent.prototype.getContactsById = function (query) {
        var _this = this;
        return this._contactService.getContactsById(query).then(function (contacts) {
            _this.contacts = contacts;
            _this.contact = contacts.filter(function (x) { return true; })[0];
            _this.noOfContacts = contacts.length;
        });
    };
    AppComponent.prototype.getContactsByTagId = function (query) {
        var _this = this;
        return this._contactService.getContactsByTagId(query).then(function (contacts) {
            _this.contacts = contacts;
            _this.contact = contacts.filter(function (x) { return true; })[0];
            _this.noOfContacts = contacts.length;
        });
    };
    AppComponent.prototype.getTags = function () {
        var _this = this;
        return this._contactService.getTags().then(function (tags) {
            _this.tags = tags;
        });
    };
    AppComponent.prototype.notifyUser = function (msg) {
        var _this = this;
        this.message = "New tag: " + msg.message.body;
        this.renderer.invokeElementMethod(this.notifier.nativeElement, 'click');
        setTimeout(function () {
            if (_this.status.isopen) {
                _this.status.isopen = !_this.status.isopen;
                _this.renderer.invokeElementMethod(_this.notifier.nativeElement, 'click');
            }
        }, 3000);
    };
    AppComponent.prototype.updateStatus = function (event) {
        this.status.isopen = !this.status.isopen;
    };
    AppComponent.prototype.setupNotification = function () {
        this._notificationService.subscribeToChannel();
    };
    AppComponent.prototype.processNotification = function () {
        var _this = this;
        this._notificationService.getMessage(function (message) { return _this.notifyUser(message); });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getContacts();
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.setupNotification();
        this.processNotification();
    };
    AppComponent.prototype.contactChangedHandler = function (contact) {
        this.contact = contact;
    };
    AppComponent.prototype.selectedContactHandler = function (contact) {
        this.getContactsById(contact.id);
    };
    AppComponent.prototype.selectedTagHandler = function (tag) {
        this.getContactsByTagId(tag.id);
    };
    AppComponent.prototype.tagsChangedHandler = function () {
        this.getContacts();
    };
    AppComponent.prototype.tagsAddedHandler = function () {
        this.processNotification();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('notifier'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object)
    ], AppComponent.prototype, "notifier", void 0);
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(668),
            styles: [__webpack_require__(663)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__contacts_contact_service__["a" /* ContactService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__contacts_contact_service__["a" /* ContactService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_notification_service__["a" /* NotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_notification_service__["a" /* NotificationService */]) === 'function' && _d) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=F:/Projects/Tutorials/angular2/contacts-app/src/app.component.js.map

/***/ },

/***/ 486:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_typeahead__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_typeahead___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_typeahead__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_popover__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_popover___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_popover__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_pubnub_angular2__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_pubnub_angular2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_pubnub_angular2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap_dropdown__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contacts_contact_list_component__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contacts_contact_detail_component__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contacts_contact_communicationdetail_component__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__search_search_component__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__contacts_contact_service__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_app_constants__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_notification_service__ = __webpack_require__(207);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__contacts_contact_list_component__["a" /* ContactListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__contacts_contact_detail_component__["a" /* ContactDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_11__contacts_contact_communicationdetail_component__["a" /* ContactCommunicationdetailComponent */],
                __WEBPACK_IMPORTED_MODULE_12__search_search_component__["a" /* SearchComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_typeahead__["TypeaheadModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap_dropdown__["DropdownModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_popover__["PopoverModule"].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__shared_app_constants__["a" /* Configuration */], __WEBPACK_IMPORTED_MODULE_6_pubnub_angular2__["PubNubAngular"],
                __WEBPACK_IMPORTED_MODULE_13__contacts_contact_service__["a" /* ContactService */], __WEBPACK_IMPORTED_MODULE_15__shared_notification_service__["a" /* NotificationService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=F:/Projects/Tutorials/angular2/contacts-app/src/app.module.js.map

/***/ },

/***/ 487:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact__ = __webpack_require__(206);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContactCommunicationdetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactCommunicationdetailComponent = (function () {
    function ContactCommunicationdetailComponent() {
    }
    ContactCommunicationdetailComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__contact__["a" /* Contact */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__contact__["a" /* Contact */]) === 'function' && _a) || Object)
    ], ContactCommunicationdetailComponent.prototype, "contact", void 0);
    ContactCommunicationdetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact-communicationdetail',
            template: __webpack_require__(669),
            styles: [__webpack_require__(664)]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactCommunicationdetailComponent);
    return ContactCommunicationdetailComponent;
    var _a;
}());
//# sourceMappingURL=F:/Projects/Tutorials/angular2/contacts-app/src/contact-communicationdetail.component.js.map

/***/ },

/***/ 488:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_service__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_notification_service__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact__ = __webpack_require__(206);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContactDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactDetailComponent = (function () {
    function ContactDetailComponent(contactService, _notificationService) {
        this.contactService = contactService;
        this._notificationService = _notificationService;
        this.tags = [];
        this.contactChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.tagAdded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.tagDeleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.tagsChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.disabled = false;
        this.status = { isopen: false };
        this.contactTags = [];
        this.backgroundColor = '';
        this.newTag = '';
        this.anyTagsModified = false;
    }
    ContactDetailComponent.prototype.ngOnInit = function () {
    };
    ContactDetailComponent.prototype.ngAfterViewInit = function () {
        this.getTags();
    };
    ContactDetailComponent.prototype.contactSelected = function () {
        this.contactChanged.emit(this.contact); // emit the selected color.
    };
    ContactDetailComponent.prototype.addTag = function () {
        this.contactService.addTag(this.newTag);
        this.anyTagsModified = true;
        this.tagAdded.emit(this.newTag);
        this._notificationService.publishMessage(this.newTag);
        this.newTag = '';
        this.getTags();
    };
    ContactDetailComponent.prototype.clearBackground = function () {
        this.backgroundColor = '';
    };
    ContactDetailComponent.prototype.activateBackground = function () {
        this.backgroundColor = 'active';
    };
    ContactDetailComponent.prototype.updateTag = function (tag) {
        this.contactService.updateTag(tag);
        this.anyTagsModified = true;
    };
    ContactDetailComponent.prototype.deleteTag = function (id) {
        this.contactService.deleteTag(id);
        this.tags = this.tags.filter(function (x) {
            return x.id != id;
        });
        this.tagAdded.emit(id);
        this.anyTagsModified = true;
    };
    ContactDetailComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    ContactDetailComponent.prototype.toggled = function (open) {
        if (!open && this.anyTagsModified) {
            this.tagsChanged.emit();
            this.anyTagsModified = false;
        }
    };
    ContactDetailComponent.prototype.getTags = function () {
        var _this = this;
        return this.contactService.getTags().then(function (tags) {
            _this.contact.tags.forEach(function (contactTag) {
                tags.filter(function (element) {
                    return element.id == contactTag.tagId;
                }).forEach(function (assignedTag) {
                    assignedTag.isAssigned = true;
                });
            });
            _this.tags = tags;
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__contact__["a" /* Contact */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__contact__["a" /* Contact */]) === 'function' && _a) || Object)
    ], ContactDetailComponent.prototype, "contact", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], ContactDetailComponent.prototype, "tags", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], ContactDetailComponent.prototype, "contactChanged", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], ContactDetailComponent.prototype, "tagAdded", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], ContactDetailComponent.prototype, "tagDeleted", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], ContactDetailComponent.prototype, "tagsChanged", void 0);
    ContactDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact-detail',
            template: __webpack_require__(670),
            styles: [__webpack_require__(665)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__contact_service__["a" /* ContactService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__contact_service__["a" /* ContactService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_notification_service__["a" /* NotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_notification_service__["a" /* NotificationService */]) === 'function' && _c) || Object])
    ], ContactDetailComponent);
    return ContactDetailComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=F:/Projects/Tutorials/angular2/contacts-app/src/contact-detail.component.js.map

/***/ },

/***/ 489:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact__ = __webpack_require__(206);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContactListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactListComponent = (function () {
    function ContactListComponent() {
        this.contacts = [];
        this.contactChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.tagsChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.tagsAdded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ContactListComponent.prototype.ngOnInit = function () {
    };
    ContactListComponent.prototype.contactChangedHandler = function (contact) {
        this.contactChanged.emit(contact);
    };
    ContactListComponent.prototype.tagsChangedHandler = function () {
        this.tagsChanged.emit();
    };
    ContactListComponent.prototype.tagsAddedHandler = function () {
        this.tagsAdded.emit();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], ContactListComponent.prototype, "contacts", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__contact__["a" /* Contact */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__contact__["a" /* Contact */]) === 'function' && _a) || Object)
    ], ContactListComponent.prototype, "contact", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], ContactListComponent.prototype, "contactChanged", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], ContactListComponent.prototype, "tagsChanged", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], ContactListComponent.prototype, "tagsAdded", void 0);
    ContactListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact-list',
            template: __webpack_require__(671),
            styles: [__webpack_require__(666)]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactListComponent);
    return ContactListComponent;
    var _a;
}());
//# sourceMappingURL=F:/Projects/Tutorials/angular2/contacts-app/src/contact-list.component.js.map

/***/ },

/***/ 490:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contacts_contact_service__ = __webpack_require__(138);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = (function () {
    function SearchComponent(_contactService) {
        var _this = this;
        this._contactService = _contactService;
        this.searchStringChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.contactSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.tagSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.asyncSelected = '';
        this.typeaheadLoading = false;
        this.typeaheadNoResults = false;
        this.searchString = '';
        this.dataSource = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            return observer.next(_this.asyncSelected);
        })
            .mergeMap(function (token) {
            _this.searchString = token;
            if (token.startsWith('#')) {
                var actualSearchString = token.substr(1, token.length - 2);
                return _this.getObservableTags(actualSearchString);
            }
            else {
                return _this.getObservableContacts(token);
            }
        });
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.searchStringChange = function () {
        this.searchStringChanged.emit(this.searchString);
    };
    SearchComponent.prototype.getObservableContacts = function (token) {
        var _this = this;
        return this._contactService.get(token).then(function (data) {
            return data.map(_this.decodeContact);
        });
    };
    SearchComponent.prototype.getObservableTags = function (token) {
        var _this = this;
        return this._contactService.getTags(token).then(function (data) {
            return data.map(_this.decodeTag);
        });
    };
    SearchComponent.prototype.decodeContact = function (json) {
        return {
            id: json.id,
            description: json.lastName + ' ' + json.firstName + ' ' + json.designation + ' at ' + json.companyName,
        };
    };
    SearchComponent.prototype.decodeTag = function (json) {
        return {
            id: json.id,
            description: json.description,
        };
    };
    SearchComponent.prototype.changeTypeaheadLoading = function (e) {
        this.typeaheadLoading = e;
    };
    SearchComponent.prototype.changeTypeaheadNoResults = function (e) {
        this.typeaheadNoResults = e;
    };
    SearchComponent.prototype.typeaheadOnSelect = function (e) {
        if (this.searchString.startsWith('#')) {
            this.tagSelected.emit(e.item);
        }
        else {
            this.contactSelected.emit(e.item);
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], SearchComponent.prototype, "searchStringChanged", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], SearchComponent.prototype, "contactSelected", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], SearchComponent.prototype, "tagSelected", void 0);
    SearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(672),
            styles: [__webpack_require__(667)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__contacts_contact_service__["a" /* ContactService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__contacts_contact_service__["a" /* ContactService */]) === 'function' && _a) || Object])
    ], SearchComponent);
    return SearchComponent;
    var _a;
}());
//# sourceMappingURL=F:/Projects/Tutorials/angular2/contacts-app/src/search.component.js.map

/***/ },

/***/ 491:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=F:/Projects/Tutorials/angular2/contacts-app/src/environment.prod.js.map

/***/ },

/***/ 492:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=F:/Projects/Tutorials/angular2/contacts-app/src/polyfills.js.map

/***/ },

/***/ 663:
/***/ function(module, exports) {

module.exports = " .app {\r\n      display: block;\r\n      text-align: center;\r\n      padding: 25px;\r\n      background: #f5f5f5;\r\n    }"

/***/ },

/***/ 664:
/***/ function(module, exports) {

module.exports = ".form-control{\r\n        border: none;\r\n    box-shadow: none;\r\n    text-align: left;\r\n}\r\n\r\n.control-label {\r\n    text-align: left;\r\n}\r\n\r\n.table th, .table td { \r\n     border-top: none !important; \r\n }"

/***/ },

/***/ 665:
/***/ function(module, exports) {

module.exports = ".open>.dropdown-menu {\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    min-width: 517px;\r\n    padding-top: 15px;\r\n}\r\n\r\n.active{\r\n     background-color: #f5f5f5;\r\n}\r\n\r\nli {\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n}\r\n\r\nli:first-child {\r\n    margin-top: 10px;\r\n} \r\n\r\nli:last-child {\r\n    margin-bottom: 10px;\r\n} "

/***/ },

/***/ 666:
/***/ function(module, exports) {

module.exports = ".table th, .table td { \r\n     border-top: none !important; \r\n }\r\n\r\n.table-responsive {\r\n    overflow-x:unset ;\r\n}"

/***/ },

/***/ 667:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 668:
/***/ function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"panel panel-default\" style=\"margin-left: 10px;margin-right: 10px;margin-top: 25px; padding: 5px 0;\">\n<div class=\"panel-body\">\n  <div class=\"col-sm-8\">\n    <app-search (contactSelected)=\"selectedContactHandler($event)\" (tagSelected)=\"selectedTagHandler($event)\">\n    </app-search>\n  </div>\n  <div class=\"col-sm-2 col-sm-offset-2\">\n    <button #notifier type=\"button\" class=\"btn btn-default btn-secondary\" [popover]=\"popTemplate\" placement=\"bottom\" (click)=\"updateStatus($event)\"> !\n</button>\n\n    <template #popTemplate>\n      <span [innerHtml]=\"message\"> </span>\n    </template>\n  </div>\n</div>\n</div>\n</div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-8\">\n    <app-contact-list [contacts]=\"contacts\" (contactChanged)=\"contactChangedHandler($event)\" (tagsChanged)=\"tagsChangedHandler()\"\n      (tagAdded)=\"tagsAddedHandler()\"></app-contact-list>\n  </div>\n  <div class=\"col-sm-4\">\n    <app-contact-communicationdetail [contact]=\"contact\" *ngIf=\"noOfContacts > 0\"></app-contact-communicationdetail>\n  </div>\n</div>\n</div>"

/***/ },

/***/ 669:
/***/ function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-body\">\n    <h3>{{contact.firstName}}&nbsp;{{contact.lastName}}</h3>\n    <div class=\"table-responsive\">\n      <table class=\"table\">\n        <tbody>\n          <tr *ngFor=\"let communicationDetail of contact.communicationDetails\">\n            <td class=\"col-sm-3\">\n              <b>{{communicationDetail.type}}:</b>\n            </td>\n            <td class=\"col-sm-9\">\n              {{communicationDetail.detail}}\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ },

/***/ 670:
/***/ function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-body {{backgroundColor}}\" (click)=\"contactSelected()\" (mouseleave)=\"clearBackground()\" (mouseenter)=\"activateBackground()\">\n    <div class=\"row\">\n      <div class=\"col-sm-8\">\n        <b>{{contact.firstName}}&nbsp;{{contact.lastName}}</b>\n      </div>\n      <div class=\"col-sm-4 text-right\" (click)=\"$event.preventDefault()\">\n        <div class=\"btn-group\" dropdown dropdown-append-to-body autoClose=\"disabled\" [(isOpen)]=\"status.isopen\" (onToggle)=\"toggled($event)\">\n          <button id=\"btn-append-to-body\" type=\"button\" class=\"btn btn-primary\" dropdownToggle>\n      Tags <span class=\"caret\"></span>\n    </button>\n          <ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\" aria-labelledby=\"btn-append-to-body\" >\n            <li role=\"menuitem\" *ngFor=\"let tag of tags\" >\n              <form class=\"form-inline\">\n                <div class=\"form-group row\">\n                  <div class=\"col-sm-12\">\n                    <div class=\"input-group\">\n                      <div class=\"input-group-addon\">\n                        <input type=\"checkbox\" (click)=\"$event.stopPropagation()\" name=\"isAssigned-{{tag.id}}\" [(ngModel)]=\"tag.isAssigned\" >\n                      </div>\n                      <input type=\"text\" class=\"form-control dropdown-item\" name=\"description-{{tag.id}}\"  [(ngModel)]=\"tag.description\" >\n                    </div>\n                  </div>\n                </div>\n                <button type=\"button\" class=\"btn btn-default\" style=\"min-width: 112px;\" (click)=\"$event.stopPropagation(); updateTag(tag);\">Edit</button> /\n                <button type=\"button\" class=\"btn btn-default\" style=\"min-width: 112px;\" (click)=\"$event.stopPropagation(); deleteTag(tag.id);\">Delete</button>\n              </form>\n              <br>\n            </li>\n            <li role=\"menuitem\">\n              <div class=\"form-group row\">\n                <div class=\"col-sm-12\">\n                  <input type=\"text\" class=\"form-control dropdown-item\"  placeholder=\"Add Tag and press enter\"  [(ngModel)]=\"newTag\" (click)=\"$event.stopPropagation()\" (keyup.enter)=\"addTag();\">\n                </div>\n              </div>\n            </li>\n          </ul>\n        </div>\n\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        {{contact.designation}} at {{contact.companyName}}\n      </div>\n    </div>\n    <div class=\"row\" style=\"padding-top: 15px\">\n<div class=\"col-sm-12\">\n  <span *ngFor=\"let tag of contact.tags\">      \n        <button class=\"btn btn-default\">{{tag.description}}</button>\n  </span>\n</div>\n</div>\n</div>\n</div>"

/***/ },

/***/ 671:
/***/ function(module, exports) {

module.exports = "<div class=\"table-responsive\">\n  <table class=\"table\">\n    <tbody>\n      <tr *ngFor=\"let contact of contacts;\">\n        <td>\n          <app-contact-detail [contact]=\"contact\" (contactChanged)=\"contactChangedHandler($event)\"\n          (tagsChanged)=\"tagsChangedHandler()\"\n          (tagAdded)=\"tagsAddedHandler()\"></app-contact-detail>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ },

/***/ 672:
/***/ function(module, exports) {

module.exports = "<!-- Custom item template -->\n<template #customItemTemplate let-model=\"item\" let-index=\"index\">\n  {{model.description}}\n</template>\n<input type=\"text\" class=\"form-control\" [(ngModel)]=\"asyncSelected\" [typeahead]=\"dataSource\" [typeaheadItemTemplate]=\"customItemTemplate\"\n  (typeaheadOnSelect)=\"typeaheadOnSelect($event)\" [typeaheadOptionsLimit]=\"7\" [typeaheadOptionField]=\"'description'\" [typeaheadMinLength]=\"0\"\n  (typeaheadLoading)=\"changeTypeaheadLoading($event)\" (typeaheadNoResults)=\"changeTypeaheadNoResults($event)\" placeholder=\"Search by Name, Company or #Tag\">\n\n<div *ngIf=\"contactLoading===true\">\n  <i class=\"glyphicon glyphicon-refresh ng-hide\" style=\"\"></i>\n</div>\n<div *ngIf=\"contactNoResults===true\" class=\"\" style=\"\">\n<i class=\"glyphicon glyphicon-remove\"></i> No Results Found\n</div>"

/***/ },

/***/ 712:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(377);


/***/ }

},[712]);
//# sourceMappingURL=main.bundle.map