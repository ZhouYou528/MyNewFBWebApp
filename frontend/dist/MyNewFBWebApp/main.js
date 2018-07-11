(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    padding: 50px;\n}"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>About This Site</h1>\n  <div style=\"margin-bottom: 20px;\">\n    <p>This site is completely built by You Zhou for the purpose of practicing coding skills.</p>\n    <p>It is build using Angular, Express, MongoDB and Node.js</p>\n    <p>Deployed on heroku with mlab backend</p>\n      <p></p>\n    <p>Source Code: <a href=\"https://github.com/ZhouYou528/MyNewFBWebApp\">here</a></p>\n  </div>\n  <button *ngIf=\"userService.loggedIn()\" color=\"accent\" routerLink=\"/dashboard\" mat-raised-button>Back</button>\n  <button *ngIf=\"!userService.loggedIn()\" color=\"accent\" routerLink=\"/\" mat-raised-button>Back</button>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent(userService) {
        this.userService = userService;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: appRoutes, AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signinform_signinform_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signinform/signinform.component */ "./src/app/signinform/signinform.component.ts");
/* harmony import */ var _signupform_signupform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signupform/signupform.component */ "./src/app/signupform/signupform.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _service_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/auth.guard */ "./src/app/service/auth.guard.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
    },
    {
        path: 'signin',
        component: _signinform_signinform_component__WEBPACK_IMPORTED_MODULE_2__["SigninformComponent"]
    },
    {
        path: 'signup',
        component: _signupform_signupform_component__WEBPACK_IMPORTED_MODULE_3__["SignupformComponent"]
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
        canActivate: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: 'profile',
        component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"],
        canActivate: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: 'message',
        component: _message_message_component__WEBPACK_IMPORTED_MODULE_8__["MessageComponent"],
        canActivate: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [
    _signinform_signinform_component__WEBPACK_IMPORTED_MODULE_2__["SigninformComponent"],
    _signupform_signupform_component__WEBPACK_IMPORTED_MODULE_3__["SignupformComponent"],
    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
    _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"],
    _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
    _message_message_component__WEBPACK_IMPORTED_MODULE_8__["MessageComponent"],
    _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"]
];


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fullPage\">\n    <app-header></app-header>\n    <div id=\"wrapper\">\n        <router-outlet></router-outlet>  \n    </div>\n    <app-footer></app-footer>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fullPage {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  position: relative; }\n\n#wrapper {\n  margin-bottom: 10%; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _service_auth_guard__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./service/auth.guard */ "./src/app/service/auth.guard.ts");
/* harmony import */ var _service_token_interceptor_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./service/token-interceptor.service */ "./src/app/service/token-interceptor.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _friendlist_friendlist_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./friendlist/friendlist.component */ "./src/app/friendlist/friendlist.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//material














//components





//service







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_18__["routingComponents"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_20__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_22__["AvatarPreviewComponent"],
                _friendlist_friendlist_component__WEBPACK_IMPORTED_MODULE_27__["FriendlistComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_28__["MessageComponent"],
                _friendlist_friendlist_component__WEBPACK_IMPORTED_MODULE_27__["AddFriendComponent"],
                _news_news_component__WEBPACK_IMPORTED_MODULE_29__["NewsComponent"]
            ],
            imports: [
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_18__["AppRoutingModule"]
            ],
            entryComponents: [
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_22__["AvatarPreviewComponent"],
                _friendlist_friendlist_component__WEBPACK_IMPORTED_MODULE_27__["AddFriendComponent"]
            ],
            providers: [
                _service_user_service__WEBPACK_IMPORTED_MODULE_23__["UserService"],
                _service_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _service_token_interceptor_service__WEBPACK_IMPORTED_MODULE_25__["TokenInterceptorService"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-tab-label {\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 500;\n}\n.mat-tab-label.mat-tab-label-active {\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 700;\n}\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard\">\n  <mat-tab-group>\n    <mat-tab label=\"News Feed\">\n      <app-news></app-news>\n    </mat-tab>\n    <mat-tab label=\"Blog\">\n      <!-- <app-selfpost></app-selfpost> -->\n    </mat-tab>\n    <mat-tab label=\"Friends List\">\n      <app-friendlist></app-friendlist>\n    </mat-tab>\n    <mat-tab label=\"Message\">\n      <app-message></app-message>\n    </mat-tab>\n  </mat-tab-group>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    padding: 1rem;\n    background-color: #F2F2F2;\n    text-align: center;\n    margin-bottom: 0;\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"footer font\">\n    Copyright 2018 &copy; You Zhou\n</p>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/friendlist/addFriend.html":
/*!*******************************************!*\
  !*** ./src/app/friendlist/addFriend.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user._id === '';\">\n    <h1 class=\"font\" style=\"font-weight: 700\" mat-dialog-title>New Friend Request</h1>\n    <div mat-dialog-content>\n        <p>Friend's name:</p>\n        <mat-form-field class=\"font\">\n            <input placeholder={{data.name}} matInput name=\"friendnametoadd\" [(ngModel)]=\"username\">\n        </mat-form-field>\n    </div>\n    <div mat-dialog-actions>\n        <button class=\"font\" mat-button color=\"alert\" id=\"searchfriend\" (click)=\"searchfriend()\">Search</button>\n        <button class=\"font\" mat-button (click)=\"onNoClick()\" color=\"primary\" id=\"cancelbtnsearchfriend\">Cancel</button>\n    </div>\n</div>\n<div *ngIf=\"user._id !== '';\">\n    <div mat-dialog-content>\n        <div id=\"left\">\n            <img style=\"width: 400px;height: 400px;\" mat-card-avatar src=\"{{ user.avatar || 'https://www.ischool.berkeley.edu/sites/default/files/default_images/avatar.jpeg'}}\">\n        </div>\n        <div id=\"right\">\n            <p>User name: {{user.username}}</p>\n            <p>Email: {{user.email}}</p>\n        </div>\n    </div>\n\n    <div mat-dialog-actions>\n        <button class=\"font\" mat-button color=\"alert\" id=\"andFriend\" (click)=\"sendMessage()\">Send</button>\n        <button class=\"font\" mat-button (click)=\"clearUser()\" color=\"primary\" id=\"cancelbtnaddfriend\">Back</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/friendlist/friendlist.component.css":
/*!*****************************************************!*\
  !*** ./src/app/friendlist/friendlist.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".outer-most-container {\n    margin-top: 10px;\n    margin-left: auto;\n    margin-right: auto;\n    width: 60%;\n}\n.search-button {\n    margin-left: 15px;\n}\n.add-button {\n    margin-left: 15px; \n}"

/***/ }),

/***/ "./src/app/friendlist/friendlist.component.html":
/*!******************************************************!*\
  !*** ./src/app/friendlist/friendlist.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"outer-most-container\">\n  <mat-form-field style=\"width: 400px;\" class=\"font\">\n    <input matInput [(ngModel)]=\"name\" placeholder=\"Search friend\">\n  </mat-form-field>\n  <div style=\"display: inline-block;\">\n    <button class=\"search-button font\" color=\"primary\" (click)=\"filterFriends()\" mat-raised-button>Search</button>\n    <button class=\"add-button font\" mat-raised-button (click)=\"openDialog()\" color=\"warn\" id=\"addfriend\">Add a new friend</button>\n  </div>\n  <mat-list [@listStagger]=\"filteredFriends\">\n    <mat-list-item *ngFor=\"let friend of filteredFriends; let i = index;\">\n      <mat-icon mat-list-icon>face</mat-icon>\n      <p class=\"font\" mat-line>{{friend.userTwo}}</p>\n      <span class=\"spacer\"></span>\n      <button mat-icon-button (click)=\"deleteFriend(friend.userTwo, i)\">\n        <i class=\"material-icons\">clear</i>\n      </button>\n    </mat-list-item>\n  </mat-list>\n</div>"

/***/ }),

/***/ "./src/app/friendlist/friendlist.component.ts":
/*!****************************************************!*\
  !*** ./src/app/friendlist/friendlist.component.ts ***!
  \****************************************************/
/*! exports provided: FriendlistComponent, AddFriendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendlistComponent", function() { return FriendlistComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFriendComponent", function() { return AddFriendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/user */ "./src/app/model/user.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _model_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/message */ "./src/app/model/message.ts");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var FriendlistComponent = /** @class */ (function () {
    function FriendlistComponent(snackBar, dialog, userService) {
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.userService = userService;
        this.currentUser = new _model_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    FriendlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getCurrentUser().subscribe(function (res) {
            if (res) {
                console.log(res);
                _this.currentUser = res;
                _this.userService.getAllFriends().subscribe(function (res) {
                    if (res.success) {
                        // console.log(res)
                        _this.friendships = res.message;
                        _this.filteredFriends = res.message;
                    }
                }, function (err) { return console.log(err); });
            }
            else {
                console.log('Get current user error!');
            }
        }, function (err) { return console.log(err); });
    };
    FriendlistComponent.prototype.filterFriends = function () {
        var _this = this;
        this.filteredFriends = this.friendships.filter(function (friend) { return friend.userTwo.toLowerCase().indexOf(_this.name.toLowerCase()) > -1; });
    };
    FriendlistComponent.prototype.deleteFriend = function (friendname, i) {
        var _this = this;
        this.userService.deleteFriend(friendname).subscribe(function (res) {
            if (res.success) {
                console.log('delete success');
                _this.friendships.splice(i, 1);
                _this.snackBar.open('Friend deleted!', 'Close', {
                    duration: 2000,
                    panelClass: 'green-snackbar'
                });
            }
        }, function (err) { return console.log(err); });
    };
    FriendlistComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(AddFriendComponent, {
            data: { name: this.name, currentUser: this.currentUser }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.ngOnInit();
        });
    };
    FriendlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-friendlist',
            template: __webpack_require__(/*! ./friendlist.component.html */ "./src/app/friendlist/friendlist.component.html"),
            styles: [__webpack_require__(/*! ./friendlist.component.css */ "./src/app/friendlist/friendlist.component.css")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_5__["listStagger"])()]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], FriendlistComponent);
    return FriendlistComponent;
}());

var AddFriendComponent = /** @class */ (function () {
    function AddFriendComponent(userService, snackBar, dialogRef, data) {
        this.userService = userService;
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.data = data;
        this.user = new _model_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.message = new _model_message__WEBPACK_IMPORTED_MODULE_4__["Message"]();
    }
    AddFriendComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddFriendComponent.prototype.clearUser = function () {
        this.user = new _model_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
    };
    AddFriendComponent.prototype.searchfriend = function () {
        var _this = this;
        if (this.username === undefined || this.username === '') {
            this.snackBar.open('Please type in a name!', 'Close', {
                duration: 2000,
                panelClass: 'red-snackbar'
            });
        }
        else {
            this.userService.getUserByUsername(this.username).subscribe(function (res) {
                if (res.success) {
                    console.log('Found!');
                    _this.user = res.user;
                }
                else {
                    _this.snackBar.open('User not found!', 'Close', {
                        duration: 2000,
                        panelClass: 'red-snackbar'
                    });
                }
            }, function (err) { return console.log(err); });
        }
    };
    AddFriendComponent.prototype.sendMessage = function () {
        var _this = this;
        if (this.user.username === this.data.currentUser.username) {
            this.snackBar.open('Can\'t add yourself!', 'Close', {
                duration: 2000,
                panelClass: 'red-snackbar'
            });
        }
        else if (this.data.currentUser.friend !== undefined && this.data.currentUser.friend.indexOf(this.user.username) > -1) {
            this.snackBar.open('Already in your friendlist!', 'Close', {
                duration: 2000,
                panelClass: 'red-snackbar'
            });
        }
        else {
            this.message.fromUser = this.data.currentUser.username;
            this.message.toUser = this.user.username;
            this.message.category = 1;
            this.message.status = 1;
            this.message.createdAt = new Date();
            this.userService.friendRequest(this.message).subscribe(function (res) {
                if (res.success) {
                    console.log('Friend request send success!');
                    _this.snackBar.open('Friend request send success!', 'Close', {
                        duration: 2000,
                        panelClass: 'green-snackbar'
                    });
                }
                else {
                    console.log('Friend request send failed!');
                }
            }, function (err) { return console.log(err); });
            this.dialogRef.close();
        }
    };
    AddFriendComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addfriend',
            template: __webpack_require__(/*! ./addFriend.html */ "./src/app/friendlist/addFriend.html"),
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], AddFriendComponent);
    return AddFriendComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spacer {\n    flex: 1 1 auto;\n}\n\n.icon-align{\n    display: inline-flex;\n    vertical-align: middle;\n    margin-right: 5px;\n  }"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <mat-toolbar class=\"mat-elevation-z5\" color=\"primary\">\n        <span style=\"text-align:center; font-family: 'Montserrat', sans-serif;\">GatorBook</span>\n        <span class=\"spacer\"></span>\n        <button style=\"margin-right: 20px;\" routerLink=\"/about\" class=\"font\" color=\"accent\" id=\"selectFile\" mat-raised-button>\n            <Label for=\"input-file-id\">\n                <i class=\"material-icons mat-18 icon-align\">whatshot</i>\n                About This Site\n            </Label>\n        </button>   \n        <button *ngIf=\"userService.loggedIn()\" mat-icon-button [matMenuTriggerFor]=\"menu\" id=\"menubtn\">\n            <i class=\"material-icons\">account_circle</i>\n        </button>\n        <mat-menu #menu=\"matMenu\">\n            <button class=\"font\" mat-menu-item routerLink=\"/dashboard\">\n                <mat-icon>dashboard</mat-icon>\n                <span>Dashboard</span>\n            </button>\n            <button class=\"font\" mat-menu-item id=\"userprofilebtn\" (click)=\"setUserProfile()\">\n                <mat-icon>person_outline</mat-icon>\n                <span>Profile</span>\n            </button>\n            <button class=\"font\" mat-menu-item routerLink=\"/message\">\n                <mat-icon>notifications</mat-icon>\n                <span>Messages</span>\n            </button>\n            <button class=\"font\" mat-menu-item routerLink=\"/\">\n                <mat-icon>home</mat-icon>\n                <span>Home</span>\n            </button>\n            <button class=\"font\" mat-menu-item id=\"logout_header\" (click)=\"logoutUser()\">\n                <mat-icon>power_settings_new</mat-icon>\n                <span>Log Out</span>\n            </button>\n        </mat-menu>\n    </mat-toolbar>\n</header>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.setUserProfile = function () {
        var _this = this;
        this.userService.getCurrentUser().subscribe(function (res) {
            // console.log(res)
            if (res) {
                _this.router.navigate(['/profile']);
            }
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.router.navigate(['']);
                }
            }
        });
    };
    HeaderComponent.prototype.logoutUser = function () {
        this.userService.logoutUser();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.login-input-form {\n    display:block;\n    width: 100%;\n}\n.button {\n    width: 245px;\n    margin-top: 100px;\n    font-family: 'Montserrat', sans-serif;\n}\n.home{\n    margin-top: 10%;\n    margin-bottom: 5%;\n}    "

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\n  <div [@fallIn]=\"\" class=\"gatorimg\">\n    <img width=\"500\" src=\"../assets/gator.png\">\n  </div>\n  <div [@fallIn]=\"\" style=\"display: inline-block;\">\n    <button class=\"button\" color=\"primary\" id=\"signinbtn\" routerLink=\"/signin\" mat-raised-button>Sign In</button>\n    <button style=\"margin-left: 15px;\" class=\"button\" color=\"warn\" id=\"signupbtn\" routerLink=\"/signup\" mat-raised-button>Sign Up</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["fallIn"])()]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n    <div id=\"content\">\n        <h1>Messages</h1>\n        <ul [@listStagger]=\"messages\">\n            <li *ngFor=\"let message of messages; let i = index;\">\n                <mat-card id=\"card\" class=\"mat-elevation-z5 font\">\n                    <mat-card-title>\n                        {{message.fromUser}}\n                    </mat-card-title>\n                    <mat-card-content>\n                        <a>Friend Request</a>\n                        <mat-card-actions *ngIf=\"message.status !== 0;\">\n                            <button color=\"primary\" class=\"font\" (click)=\"accept(message, i)\" mat-button>ACCEPT</button>\n                            <button color=\"warn\" class=\"font\" (click)=\"decline(message, i)\" mat-button>DECLINE</button>\n                        </mat-card-actions>\n                        <mat-card-actions *ngIf=\"message.status === 0;\">\n                            <button color=\"primary\" class=\"font\" (click)=\"decline(message, i)\" mat-button>\n                                <!-- <Label for=\"input-file-id\">\n                                    <i class=\"material-icons mat-18 icon-align\">delete</i> -->\n                                    DELETE\n                                <!-- </Label> -->\n                            </button>\n                        </mat-card-actions>\n                    </mat-card-content>\n                </mat-card>\n\n            </li>\n        </ul>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/message/message.component.scss":
/*!************************************************!*\
  !*** ./src/app/message/message.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  font-family: 'Montserrat', sans-serif;\n  display: -ms-grid;\n  display: grid;\n  height: 100%; }\n  #container #content {\n    padding: 30px 50px; }\n  #container #content ul {\n      list-style-type: none;\n      margin: 0;\n      padding: 0; }\n  #container #content ul li {\n        border-radius: 10px;\n        padding: 5px;\n        margin-bottom: 8px; }\n  #container #content ul mat-card {\n        border-radius: 10px;\n        padding-left: 25px;\n        padding-bottom: 10px; }\n  #container #content ul mat-card mat-card-title {\n          font-size: 1.5em;\n          text-decoration: none;\n          font-weight: bold; }\n  #container #content ul mat-card mat-card-content {\n          margin-top: 20px; }\n  .spacer {\n  flex: 1 1 auto; }\n  .icon-align {\n  display: inline-flex;\n  vertical-align: middle; }\n"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _service_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/message.service */ "./src/app/service/message.service.ts");
/* harmony import */ var _model_friendship__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/friendship */ "./src/app/model/friendship.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MessageComponent = /** @class */ (function () {
    function MessageComponent(snackBar, userService, messageService) {
        this.snackBar = snackBar;
        this.userService = userService;
        this.messageService = messageService;
    }
    MessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAllMessages().subscribe(function (res) {
            if (res)
                _this.messages = res.message;
            else {
                console.log('error!');
            }
        }, function (err) { return console.log(err); });
    };
    MessageComponent.prototype.decline = function (message, i) {
        var _this = this;
        message.status = 2;
        this.messageService.updateMessage(message).subscribe(function (res) {
            if (res) {
                _this.messages.splice(i, 1);
            }
            else {
                console.log(res);
            }
        }, function (err) { return console.log(err); });
    };
    MessageComponent.prototype.accept = function (message, i) {
        var _this = this;
        var friendship = new _model_friendship__WEBPACK_IMPORTED_MODULE_4__["Friendship"]();
        friendship.userTwo = message.fromUser;
        friendship.createdAt = new Date();
        console.log(friendship);
        this.userService.addFriend(friendship).subscribe(function (res) {
            if (res.success) {
                console.log('Add friend success!');
                _this.snackBar.open('Friend added successfully!', 'Close', {
                    duration: 2000,
                    panelClass: 'green-snackbar'
                });
                message.status = 0;
                _this.messageService.updateMessage(message).subscribe(function (res) {
                    if (res) {
                    }
                    else {
                        console.log(res);
                    }
                }, function (err) { return console.log(err); });
            }
            else {
                console.log('Add friend failed!');
                _this.snackBar.open('Friend is already in the list!', 'Close', {
                    duration: 2000,
                    panelClass: 'red-snackbar'
                });
            }
        }, function (err) { return console.log(err); });
    };
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.scss */ "./src/app/message/message.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["listStagger"])(), Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["fallIn"])()]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _service_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/model/friendship.ts":
/*!*************************************!*\
  !*** ./src/app/model/friendship.ts ***!
  \*************************************/
/*! exports provided: Friendship */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Friendship", function() { return Friendship; });
var Friendship = /** @class */ (function () {
    function Friendship(_id, userOne, userTwo, createdAt) {
        if (_id === void 0) { _id = ''; }
        if (userOne === void 0) { userOne = ''; }
        if (userTwo === void 0) { userTwo = ''; }
        if (createdAt === void 0) { createdAt = null; }
        this._id = _id;
        this.userOne = userOne;
        this.userTwo = userTwo;
        this.createdAt = createdAt;
    }
    return Friendship;
}());



/***/ }),

/***/ "./src/app/model/message.ts":
/*!**********************************!*\
  !*** ./src/app/model/message.ts ***!
  \**********************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
var Message = /** @class */ (function () {
    function Message(_id, fromUser, toUser, category, status, createdAt) {
        if (_id === void 0) { _id = ''; }
        if (fromUser === void 0) { fromUser = ''; }
        if (toUser === void 0) { toUser = ''; }
        if (category === void 0) { category = -1; }
        if (status === void 0) { status = -1; }
        if (createdAt === void 0) { createdAt = null; }
        this._id = _id;
        this.fromUser = fromUser;
        this.toUser = toUser;
        this.category = category;
        this.status = status;
        this.createdAt = createdAt;
    }
    return Message;
}());



/***/ }),

/***/ "./src/app/model/post.ts":
/*!*******************************!*\
  !*** ./src/app/model/post.ts ***!
  \*******************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
var Post = /** @class */ (function () {
    function Post(_id, body, createdBy, createdAt, // need take care initial value
    likes, likedBy, comments, img) {
        if (_id === void 0) { _id = ''; }
        if (body === void 0) { body = ''; }
        if (createdBy === void 0) { createdBy = ''; }
        if (createdAt === void 0) { createdAt = null; }
        if (likes === void 0) { likes = 0; }
        if (likedBy === void 0) { likedBy = []; }
        if (comments === void 0) { comments = []; }
        if (img === void 0) { img = ''; }
        this._id = _id;
        this.body = body;
        this.createdBy = createdBy;
        this.createdAt = createdAt;
        this.likes = likes;
        this.likedBy = likedBy;
        this.comments = comments;
        this.img = img;
    }
    return Post;
}());



/***/ }),

/***/ "./src/app/model/user.ts":
/*!*******************************!*\
  !*** ./src/app/model/user.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(_id, username, password, email, nickname, gender, dob, avatar) {
        if (_id === void 0) { _id = ''; }
        if (username === void 0) { username = ''; }
        if (password === void 0) { password = ''; }
        if (email === void 0) { email = ''; }
        if (nickname === void 0) { nickname = ''; }
        if (gender === void 0) { gender = ''; }
        if (dob === void 0) { dob = new Date(); }
        if (avatar === void 0) { avatar = ''; }
        this._id = _id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.nickname = nickname;
        this.gender = gender;
        this.dob = dob;
        this.avatar = avatar;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/news/news.component.html":
/*!******************************************!*\
  !*** ./src/app/news/news.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <mat-expansion-panel>\n    <mat-expansion-panel-header class=\"font\" id=\"makepost\">\n      <mat-panel-title>\n        Make Post\n      </mat-panel-title>\n      <mat-panel-description>\n        What's on your mind?\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <mat-form-field class=\"textwidth font\">\n      <input matInput name=\"postinput\" [(ngModel)]=\"post.body\" #message maxlength=\"256\">\n      <mat-hint align=\"end\">{{message.value.length}} / 256</mat-hint>\n    </mat-form-field>\n    <img *ngIf=\"url.length > 0\" class=\"uploadImg\" src=\"{{ url }}\">\n    <div class=\"input\">\n      <input class=\"ng-hide font\" id=\"input-file-id\" (change)=\"fileChangeEvent($event)\" type=\"file\" #inputFile hidden/>\n      <button class=\"photo-button font\" color=\"primary\" id=\"selectFile\" mat-raised-button>\n        <Label for=\"input-file-id\">\n          <i class=\"material-icons mat-18 icon-align\">insert_photo</i>\n          Photo\n        </Label>\n      </button>\n      <button class=\"post-button font\" color=\"warn\" id=\"sendpost\" (click)=\"sendPost()\" mat-raised-button>Post</button>\n    </div>\n  </mat-expansion-panel>\n</div>\n<div id=\"container\">\n    <div id=\"content\">\n        <!-- <h1>Posts</h1> -->\n        <ul [@listStagger]=\"posts\">\n            <li *ngFor=\"let post of posts; let i = index;\">\n                <mat-card id=\"card\" class=\"mat-elevation-z5 font\">\n                  <mat-card-header>\n                      <img mat-card-avatar class=\"post-image\" src=\"{{ 'https://www.ischool.berkeley.edu/sites/default/files/default_images/avatar.jpeg'}}\">\n                      <mat-card-title id=\"postauthor\" class=\"post-author\">{{post.createdBy}}</mat-card-title>\n                      <mat-card-subtitle>{{post.createdAt | date:\"yyyy-MM-dd HH:mm:ss\"}}</mat-card-subtitle>\n                    </mat-card-header>\n                    <mat-card-content>\n                        <img class=\"uploadImg\" *ngIf=\"post.img\" src=\"{{ post.img }}\"> \n                        <p id=\"postcontent\" style=\"font-size: 15px\">{{post.body}}</p>\n                    </mat-card-content>\n                    <mat-card-actions>\n                        <button mat-button id=\"likebtn\" (click)=\"likeCancelLikePost(i)\">\n                          <span><i class=\"material-icons mat-18 icon-align\" [class.red-color]=\"post.likedBy.indexOf(curUsername) >= 0\">favorite</i></span>\n                          <span class=\"fill-space\"></span>\n                          <span *ngIf=\"post.likes>0\" id=\"likenum\">{{post.likes}}</span>\n                        </button>\n                        <button mat-button id=\"commentbtn\">\n                          <i class=\"material-icons mat-18\">insert_comment</i>\n                        </button>\n                        <button mat-button>\n                          <i class=\"material-icons mat-18\">share</i>\n                        </button>\n                        <mat-card-content>\n                          <p *ngIf=\"post.likes>0\" class=\"like-font\" id=\"likeby\">Liked by: {{post.likedBy}}</p>\n                        </mat-card-content>\n                      </mat-card-actions>\n                </mat-card>\n\n            </li>\n        </ul>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/news/news.component.scss":
/*!******************************************!*\
  !*** ./src/app/news/news.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".make-post {\n  width: 648px; }\n\n.post-image {\n  background-size: cover;\n  width: 50px;\n  height: 50px;\n  margin-top: 5px;\n  margin-right: 5px; }\n\n.post-author {\n  color: #00897B; }\n\n.textwidth {\n  width: 100%; }\n\n.icon-align {\n  display: inline-flex;\n  vertical-align: middle; }\n\n.post-button {\n  margin-left: 15px;\n  margin-top: 10px;\n  width: 200px; }\n\n.photo-button {\n  margin-top: 10px;\n  width: 200px; }\n\n.uploadImg {\n  width: 100%;\n  height: 100%;\n  max-width: 500px;\n  margin-top: 15px;\n  margin-bottom: 15px; }\n\n#container {\n  font-family: 'Montserrat', sans-serif;\n  display: -ms-grid;\n  display: grid; }\n\n#container #content {\n    padding: 20px 50px; }\n\n#container #content ul {\n      list-style-type: none;\n      margin: 0;\n      padding: 0; }\n\n#container #content ul li {\n        border-radius: 10px;\n        padding: 5px;\n        margin-bottom: 8px; }\n\n#container #content ul mat-card {\n        border-radius: 10px;\n        padding-left: 25px;\n        padding-bottom: 10px; }\n\n#container #content ul mat-card mat-card-title {\n          font-size: 1.5em;\n          text-decoration: none;\n          font-weight: bold; }\n\n#container #content ul mat-card mat-card-content {\n          margin-top: 20px; }\n"

/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/post */ "./src/app/model/post.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/user */ "./src/app/model/user.ts");
/* harmony import */ var _service_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/post.service */ "./src/app/service/post.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NewsComponent = /** @class */ (function () {
    function NewsComponent(snackBar, userService, postService) {
        this.snackBar = snackBar;
        this.userService = userService;
        this.postService = postService;
        this.url = '';
        this.selectedFile = null;
        this.post = new _model_post__WEBPACK_IMPORTED_MODULE_1__["Post"]();
        this.currentUser = new _model_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.posts = [];
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getCurrentUser().subscribe(function (res) {
            if (res) {
                // console.log(res)
                _this.currentUser = res;
                _this.postService.getAllPosts(_this.currentUser.username).subscribe(function (res) {
                    if (res.success) {
                        console.log(res.posts);
                        _this.posts = res.posts;
                    }
                }, function (err) { return console.log(err); });
            }
            else {
                console.log('Get current user error!');
            }
        }, function (err) { return console.log(err); });
    };
    NewsComponent.prototype.fileChangeEvent = function (event) {
        var _this = this;
        this.selectedFile = event.target.files[0];
        if (this.selectedFile) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = function (x) {
                _this.url = x.target.result;
            };
        }
    };
    NewsComponent.prototype.sendPost = function () {
        var _this = this;
        var fd = new FormData();
        fd.append('body', this.post.body);
        fd.append('createdBy', this.currentUser.username);
        // fd.append('createdAt', new Date().toUTCString());
        if (this.selectedFile != null) {
            fd.append('img', this.selectedFile, this.selectedFile.name);
        }
        this.postService.sendPost(fd).subscribe(function (res) {
            if (res.success) {
                console.log(res);
                _this.snackBar.open('Send post success!', 'Close', {
                    duration: 2000,
                    panelClass: 'green-snackbar'
                });
                _this.url = "";
                _this.post = new _model_post__WEBPACK_IMPORTED_MODULE_1__["Post"]();
            }
            else {
                _this.snackBar.open('Please say something!', 'Close', {
                    duration: 2000,
                    panelClass: 'red-snackbar'
                });
            }
        }, function (err) {
            console.log(err);
            _this.snackBar.open('Send post failed!', 'Close', {
                duration: 2000,
                panelClass: 'red-snackbar'
            });
        });
        this.ngOnInit();
    };
    NewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.scss */ "./src/app/news/news.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_6__["listStagger"])()]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _service_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/router.animations.ts":
/*!**************************************!*\
  !*** ./src/app/router.animations.ts ***!
  \**************************************/
/*! exports provided: moveIn, fallIn, moveInLeft, listStagger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveIn", function() { return moveIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fallIn", function() { return fallIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveInLeft", function() { return moveInLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listStagger", function() { return listStagger; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

function moveIn() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('moveIn', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0', transform: 'translateX(100px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.6s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1', transform: 'translateX(0)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1', transform: 'translateX(0)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0', transform: 'translateX(-200px)' }))
        ])
    ]);
}
function fallIn() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fallIn', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0', transform: 'translateY(40px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.4s .2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1', transform: 'translateY(0)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1', transform: 'translateX(0)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0', transform: 'translateX(-200px)' }))
        ])
    ]);
}
function moveInLeft() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('moveInLeft', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0', transform: 'translateX(-100px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.6s .2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1', transform: 'translateX(0)' }))
        ])
    ]);
}
function listStagger() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('listStagger', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-15px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('550ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0px)' })))
            ], { optional: true }),
        ])
    ]);
}


/***/ }),

/***/ "./src/app/service/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/service/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.userService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/service/message.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/message.service.ts ***!
  \********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageService = /** @class */ (function () {
    function MessageService(http, router) {
        this.http = http;
        this.router = router;
    }
    MessageService.prototype.updateMessage = function (message) {
        return this.http.put('/messages/update-message/' + message._id, message);
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/service/post.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/post.service.ts ***!
  \*****************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
    }
    PostService.prototype.sendPost = function (fd) {
        return this.http.post('/posts/newPost', fd);
    };
    PostService.prototype.getAllPosts = function (username) {
        return this.http.get('/posts/getAllPosts/' + username);
    };
    PostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/service/token-interceptor.service.ts":
/*!******************************************************!*\
  !*** ./src/app/service/token-interceptor.service.ts ***!
  \******************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(injector) {
        this.injector = injector;
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        //avoid cyclic dependency error, use injector
        var userService = this.injector.get(_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]);
        // console.log(userService.getToken())
        var tokenizedReq = req.clone({
            setHeaders: {
                Authorization: "Bearer " + userService.getToken()
            }
        });
        return next.handle(tokenizedReq);
    };
    TokenInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "./src/app/service/user.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http, router) {
        this.http = http;
        this.router = router;
    }
    UserService.prototype.loginUser = function (username, password) {
        return this.http.post('/users/login', { username: username, password: password });
    };
    UserService.prototype.create = function (user) {
        return this.http.post('/users/register', user);
    };
    UserService.prototype.loggedIn = function () {
        return !!localStorage.getItem('token');
    };
    UserService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    UserService.prototype.logoutUser = function () {
        localStorage.removeItem('token');
        this.router.navigate(['']);
    };
    UserService.prototype.getCurrentUser = function () {
        return this.http.get('/users/getCurrentUser');
    };
    UserService.prototype.updateEmail = function (user) {
        return this.http.put('/users/update-email/' + user._id, user);
    };
    UserService.prototype.updatePassword = function (user) {
        return this.http.put('users/update-password/' + user._id, user);
    };
    UserService.prototype.updateAvatar = function (user, fd) {
        return this.http.put('users/update-avatar/' + user._id, fd);
    };
    UserService.prototype.friendRequest = function (message) {
        return this.http.post('messages/add', message);
    };
    UserService.prototype.getUserByUsername = function (username) {
        return this.http.get('users/get-user-by-username/' + username);
    };
    UserService.prototype.getAllMessages = function () {
        return this.http.get('messages/get-all');
    };
    UserService.prototype.addFriend = function (friendship) {
        return this.http.post('friendships/add', friendship);
    };
    UserService.prototype.getAllFriends = function () {
        return this.http.get('friendships/get-all-friends');
    };
    UserService.prototype.deleteFriend = function (friendname) {
        return this.http.delete('friendships/delete-friend/' + friendname);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/service/validate.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/validate.service.ts ***!
  \*********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateLogin = function (user) {
        if (user.username === '' || user.username === undefined) {
            return 'Please fill in the user name!';
        }
        else if (user.password === '' || user.password === undefined) {
            return 'Please fill in the user password!';
        }
        else {
            return 'Success!';
        }
    };
    ValidateService.prototype.validateRegister = function (user, confirmedpassword) {
        if (user.username === '' || user.username === undefined) {
            return 'Please fill in the user name!';
        }
        else if (user.password === '' || user.password === undefined) {
            return 'Please fill in the user password!';
        }
        else if (user.password !== confirmedpassword) {
            return 'Password don\'t match!';
        }
        else if (user.email === '' || user.email === undefined) {
            return 'Please fill in the user email!';
        }
        else if (!this.validateEmail(user.email)) {
            return 'Email is not valid!';
        }
        else {
            return 'Success!';
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/app/signinform/signinform.component.css":
/*!*****************************************************!*\
  !*** ./src/app/signinform/signinform.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    flex-grow: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;   \n}\n.login-input-form {\n    display:block;\n    width: 100%;\n    font-family: 'Montserrat', sans-serif;\n}\n.sign-in-button {\n    display: inline-block; \n    margin-top: 10px;\n}\n.sign-up-button {\n    display: inline-block;\n    padding-left: 10px;\n    margin-top: 10px;\n}\n.font {\n    font-family: 'Montserrat', sans-serif;\n}\n.signin {\n    margin-top: 10%;\n}\n"

/***/ }),

/***/ "./src/app/signinform/signinform.component.html":
/*!******************************************************!*\
  !*** ./src/app/signinform/signinform.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"signin\">\n  <form (submit)=\"loginUser($event)\">\n    <div>\n      <img [@fallIn]=\"\" class=\"gatorimg\" width=\"500\" src=\"../assets/gator.png\">\n    </div>\n    <div [@fallIn]=\"\">\n      <mat-form-field class=\"login-input-form\">\n        <input class=\"font\" matInput placeholder=\"Enter your username\" name=\"username\" [(ngModel)]=\"signinUser.username\">\n      </mat-form-field>\n      <mat-form-field class=\"login-input-form\">\n        <input class=\"font\" type=\"password\" matInput placeholder=\"Enter your password\" name=\"password\" [type]=\"hide ? 'password' : 'text'\"\n          [(ngModel)]=\"signinUser.password\">\n        <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n      </mat-form-field>\n      <div class=\"sign-in-button\">\n        <button class=\"font\" color=\"primary\" id=\"signinbtn\" type=\"submit\" mat-raised-button>Sign In</button>\n      </div>\n      <div class=\"sign-up-button\">\n        <button class=\"font\" color=\"primary\" id=\"backbtn\" routerLink=\"/\" mat-raised-button>Back</button>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/signinform/signinform.component.ts":
/*!****************************************************!*\
  !*** ./src/app/signinform/signinform.component.ts ***!
  \****************************************************/
/*! exports provided: SigninformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninformComponent", function() { return SigninformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/user */ "./src/app/model/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _service_validate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/validate.service */ "./src/app/service/validate.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SigninformComponent = /** @class */ (function () {
    function SigninformComponent(snackBar, router, userService, validateService) {
        this.snackBar = snackBar;
        this.router = router;
        this.userService = userService;
        this.validateService = validateService;
        this.hide = true;
        this.signinUser = new _model_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    SigninformComponent.prototype.ngOnInit = function () {
    };
    SigninformComponent.prototype.loginUser = function (e) {
        var _this = this;
        e.preventDefault();
        this.signinUser.username = e.target.elements[0].value;
        this.signinUser.password = e.target.elements[1].value;
        this.msg = this.validateService.validateLogin(this.signinUser);
        if (this.msg === 'Success!') {
            this.userService.loginUser(this.signinUser.username, this.signinUser.password)
                .subscribe(function (res) {
                console.log(res);
                if (res.success) {
                    _this.snackBar.open('Login Success!', 'Close', {
                        duration: 2000,
                        panelClass: 'green-snackbar'
                    });
                    localStorage.setItem('token', res.token);
                    _this.router.navigate(['dashboard']);
                }
                else if (res.message === 'Invalid password.') {
                    _this.snackBar.open('Invalid Password!', 'Close', {
                        duration: 2000,
                        panelClass: 'red-snackbar'
                    });
                }
                else if (res.message === 'Username not found.') {
                    _this.snackBar.open('No such user, please sign up!', 'Close', {
                        duration: 2000,
                        panelClass: 'red-snackbar'
                    });
                }
            }, function (err) { return console.log(err); });
        }
        else {
            this.snackBar.open(this.msg, 'Close', {
                duration: 2000,
                panelClass: 'red-snackbar'
            });
        }
    };
    SigninformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signinform',
            template: __webpack_require__(/*! ./signinform.component.html */ "./src/app/signinform/signinform.component.html"),
            styles: [__webpack_require__(/*! ./signinform.component.css */ "./src/app/signinform/signinform.component.css")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_6__["fallIn"])()]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _service_validate_service__WEBPACK_IMPORTED_MODULE_4__["ValidateService"]])
    ], SigninformComponent);
    return SigninformComponent;
}());



/***/ }),

/***/ "./src/app/signupform/signupform.component.css":
/*!*****************************************************!*\
  !*** ./src/app/signupform/signupform.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    flex-grow: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n  \n.example-full-width {\n    width: 100%;\n    font-family: 'Montserrat', sans-serif;\n}\n  \n.regis-title {\n    font-weight:bold;\n    font-size: 40px;\n    margin:1.5em 0;\n    display:block;\n}\n  \n.button-style {\n    margin:2.5em 0;\n}\n  \n.gender-style {\n    margin:1.5em 0;\n}\n  \n.left-gender {\n    display: inline-block; \n}\n  \n.right-gender {\n    display: inline-block;\n    padding-left: 30px;\n}\n  \n.left-component {\n    display: inline-block; \n    margin-top: 15px;\n}\n  \n.right-component {\n    display: inline-block;\n    padding-left: 10px;\n    margin-top: 15px;\n}"

/***/ }),

/***/ "./src/app/signupform/signupform.component.html":
/*!******************************************************!*\
  !*** ./src/app/signupform/signupform.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [@fallIn]=\"\" (submit)=\"signupUser()\">\n    <div>\n      <label class=\"regis-title\">Sign Up</label>\n    </div>\n    <mat-form-field class=\"example-full-width\">\n      <input class=\"font\" matInput placeholder=\"Username\" name=\"signupusername\" [(ngModel)]=\"newUser.username\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input class=\"font\" matInput placeholder=\"Nickname\" name=\"nickname\" [(ngModel)]=\"newUser.nickname\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input class=\"font\" type =\"password\" matInput placeholder=\"Password\" name=\"signuppassword\" [(ngModel)]=\"newUser.password\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input class=\"font\" type =\"password\" matInput placeholder=\"Confirm Password\" name=\"confirmedpassword\" [(ngModel)]=\"confirmedpassword\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input class=\"font\" type =\"text\" matInput placeholder=\"Email\" name=\"email\" [(ngModel)]=\"newUser.email\">\n    </mat-form-field>\n    <mat-form-field class=\"font\">\n      <input matInput [matDatepicker]=\"picker\" placeholder=\"Birthdate\" name=\"dob\" [(ngModel)]=\"newUser.dob\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\n    </mat-form-field>\n    <div class=\"gender-style\">\n      <mat-radio-group name=\"gender\" [(ngModel)]=\"newUser.gender\">\n      <mat-radio-button class=\"left-gender font\" value=\"Male\">Male</mat-radio-button>\n      <mat-radio-button class=\"right-gender font\" value=\"Female\">Female</mat-radio-button>\n    </mat-radio-group>\n    </div>\n    <div class=\"left-component\">    \n      <button class=\"font\" color =\"primary\" id=signupsubmitbtn type =\"submit\" mat-raised-button>Submit</button>\n    </div>\n    <div class=\"right-component\">\n        <button class=\"font\" color =\"primary\" id=signupcancelbtn routerLink=\"/\" mat-raised-button>Cancel</button>\n    </div>\n  </form>\n"

/***/ }),

/***/ "./src/app/signupform/signupform.component.ts":
/*!****************************************************!*\
  !*** ./src/app/signupform/signupform.component.ts ***!
  \****************************************************/
/*! exports provided: SignupformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupformComponent", function() { return SignupformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/user */ "./src/app/model/user.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_validate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/validate.service */ "./src/app/service/validate.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignupformComponent = /** @class */ (function () {
    function SignupformComponent(snackBar, validateService, router, userService) {
        this.snackBar = snackBar;
        this.validateService = validateService;
        this.router = router;
        this.userService = userService;
        this.newUser = new _model_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    SignupformComponent.prototype.ngOnInit = function () {
    };
    SignupformComponent.prototype.signupUser = function () {
        var _this = this;
        console.log(this.newUser);
        this.msg = this.validateService.validateRegister(this.newUser, this.confirmedpassword);
        if (this.msg === 'Success!') {
            this.userService.create(this.newUser)
                .subscribe(function (res) {
                console.log(res);
                if (res.success) {
                    _this.snackBar.open('Register Success! Please login.', 'Close', {
                        duration: 2000,
                        panelClass: 'green-snackbar'
                    });
                    _this.router.navigate(['signin']);
                }
                else if (res.message === 'Username already exists') {
                    _this.snackBar.open('Username already exists!', 'Close', {
                        duration: 2000,
                        panelClass: 'red-snackbar'
                    });
                }
            }, function (err) { return console.log(err); });
        }
        else {
            this.snackBar.open(this.msg, 'Close', {
                duration: 2000,
                panelClass: 'red-snackbar'
            });
        }
    };
    SignupformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signupform',
            template: __webpack_require__(/*! ./signupform.component.html */ "./src/app/signupform/signupform.component.html"),
            styles: [__webpack_require__(/*! ./signupform.component.css */ "./src/app/signupform/signupform.component.css")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_6__["fallIn"])()]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _service_validate_service__WEBPACK_IMPORTED_MODULE_4__["ValidateService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], SignupformComponent);
    return SignupformComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/avatarPreview.html":
/*!*************************************************!*\
  !*** ./src/app/user-profile/avatarPreview.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div>\n        <h1 class=\"avatar-header\">Change your Avatar</h1>\n    </div>\n    <div>\n        <img class=\"uploadImg\" src=\"{{ avatar || 'https://www.ischool.berkeley.edu/sites/default/files/default_images/avatar.jpeg' }}\">\n    </div>\n\n    <div class=\"input\">\n        <input class=\"ng-hide\" id=\"input-file-id\" (change)=\"fileChangeEvent($event)\" type=\"file\" #inputFile hidden/>\n        <button class=\"font\" color=\"primary\" id=\"selectFile\" mat-raised-button>\n            <Label for=\"input-file-id\">\n                <i class=\"material-icons mat-18 icon-align\">insert_photo</i>\n                Photo\n            </Label>\n        </button>\n        <button class=\"button-spacer font\" color=\"warn\" id=\"sendpost\" (click)=\"updateAvatar()\" mat-raised-button>Confirm</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    flex-grow: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  \n  .example-full-width {\n    width: 100%;\n    font-family: 'Montserrat', sans-serif;\n  }\n  \n  .example-button-color {\n      color: #80CBC4\n  }\n  \n  .example-form {\n    min-width: 150px;\n    max-width: 600px;\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  \n  .post-image {\n    background-size: cover;\n    width: 150px;\n    height: 150px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 80px;\n    margin-bottom: 100px;\n  }\n  \n  .example-card {\n    width: 800px;\n    padding:0 0 50px 0;\n    margin-top: 5%;\n    margin-bottom: 5%;\n  }\n  \n  .card-header {\n    background-size: cover;\n    background-image: url('afternoon.jpg');\n    margin-bottom: 50px;\n  }\n  \n  .back-button {\n    margin-left: 100px;\n    font-family: 'Montserrat', sans-serif;\n  }\n  \n  .uploadImg{\n    width: 100%;\n    height: 100%;\n    max-width: 300px;\n    padding:0 0 20px 0;\n    margin-left: 15px;\n  }\n  \n  .icon-align{\n    display: inline-flex;\n    vertical-align: middle;\n  }\n  \n  .input{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  \n  .button-spacer{\n    margin-left: 10px;\n  }\n  \n  .avatar-header{\n    align-items: center;\n    justify-content: center;\n    font: bold;\n  }"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@fallIn]=\"\">\n  <mat-card class=\"example-card mat-elevation-z8\">\n    <mat-card-header class=\"card-header\">\n      <img mat-card-avatar class=\"post-image\" src=\"{{ currentUser.avatar || 'https://www.ischool.berkeley.edu/sites/default/files/default_images/avatar.jpeg'}}\"\n        (click)=\"openDialog()\">\n    </mat-card-header>\n\n    <form class=\"example-form\">\n      <!-- User name -->\n      <mat-form-field class=\"example-full-width\">\n        <input matInput id=\"prfusername\" placeholder=\"Username\" disabled value={{currentUser.username}}>\n      </mat-form-field>\n      <!-- Nick name -->\n      <mat-form-field class=\"example-full-width\">\n        <input matInput id=\"prfnickname\" placeholder=\"Nickname\" disabled value={{currentUser.nickname}}>\n      </mat-form-field>\n      <!-- Birthday -->\n      <mat-form-field class=\"example-full-width\">\n        <input matInput id=\"prfbirthday\" placeholder=\"Birthday\" disabled value={{currentUser.dob.toString().substring(0,10)}}>\n      </mat-form-field>\n      <!-- Email -->\n      <table class=\"example-full-width\" cellspacing=\"0\">\n        <tr>\n          <td>\n            <mat-form-field class=\"example-full-width\">\n              <input matInput id=\"prfemail\" placeholder=\"Email\" disabled value={{currentUser.email}}>\n            </mat-form-field>\n          </td>\n          <td>\n            <button class=\"font\" color=\"primary\" id=\"editemailbtn\" (click)=\"emaileditable=!emaileditable\" mat-raised-button>Edit</button>\n          </td>\n        </tr>\n      </table>\n      <table [@fallIn]=\"\" class=\"example-full-width\" cellspacing=\"0\" *ngIf=\"emaileditable\">\n        <tr>\n          <td>\n            <form class=\"example-form\">\n              <mat-form-field class=\"example-full-width\">\n                <input type=\"text\" matInput placeholder=\"New Email Address\" name=\"email\" [(ngModel)]=\"currentUser.email\">\n              </mat-form-field>\n            </form>\n          </td>\n          <td>\n            <button class=\"font\" color=\"primary\" id=\"confirmemailbtn\" (click)=\"update_email();\" mat-raised-button>Confirm</button>\n          </td>\n        </tr>\n      </table>\n      <!-- Password -->\n      <table class=\"example-full-width\" cellspacing=\"0\">\n        <tr>\n          <td>\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Password\" disabled value=....................>\n            </mat-form-field>\n          </td>\n          <td>\n            <button class=\"font\" color=\"primary\" id=\"editpasswordbtn\" (click)=\"passwordeditable=!passwordeditable\" mat-raised-button>Edit</button>\n          </td>\n        </tr>\n      </table>\n      <table [@fallIn]=\"\" class=\"example-full-width\" cellspacing=\"0\" *ngIf=\"passwordeditable\">\n        <tr>\n          <td>\n            <form class=\"example-form\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"New Password\" name=\"password\" [type]=\"hide ? 'password' : 'text'\" [(ngModel)]=\"currentUser.password\">\n                <!-- <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon> -->\n              </mat-form-field>\n            </form>\n          </td>\n          <td>\n            <button class=\"font\" color=\"primary\" id=\"confirmpasswordbtn\" (click)=\"update_password();\"\n              mat-raised-button>Confirm</button>\n          </td>\n        </tr>\n      </table>\n\n    </form>\n\n    <button color=\"primary\" class=\"back-button\" routerLink=\"/dashboard\" mat-raised-button>Back to Homepage</button>\n\n\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent, AvatarPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarPreviewComponent", function() { return AvatarPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/user */ "./src/app/model/user.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_validate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/validate.service */ "./src/app/service/validate.service.ts");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(snackBar, validateService, userService, dialog) {
        this.snackBar = snackBar;
        this.validateService = validateService;
        this.userService = userService;
        this.dialog = dialog;
        this.currentUser = new _model_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.hide = true;
        this.emaileditable = false;
        this.passwordeditable = false;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getCurrentUser().subscribe(function (res) {
            if (res) {
                console.log(res);
                _this.currentUser = res;
            }
            else {
                console.log('Get current user error!');
            }
        }, function (err) { return console.log(err); });
    };
    UserProfileComponent.prototype.update_email = function () {
        var _this = this;
        if (this.validateService.validateEmail(this.currentUser.email)) {
            this.userService.updateEmail(this.currentUser).subscribe(function (res) {
                if (res) {
                    console.log('Email modify success!');
                    _this.emaileditable = false;
                    _this.snackBar.open('Email update success!', 'Close', {
                        duration: 2000,
                        panelClass: 'green-snackbar'
                    });
                    _this.ngOnInit();
                }
                else {
                    console.log('Update email error!');
                }
            }, function (err) { return console.log(err); });
        }
        else {
            this.snackBar.open('Email is not valid!', 'Close', {
                duration: 2000,
                panelClass: 'red-snackbar'
            });
        }
    };
    UserProfileComponent.prototype.update_password = function () {
        var _this = this;
        if (this.currentUser.password.length > 16) {
            this.snackBar.open('Password too long!', 'Close', {
                duration: 2000,
                panelClass: 'red-snackbar'
            });
        }
        else {
            this.userService.updatePassword(this.currentUser).subscribe(function (res) {
                if (res) {
                    console.log('Password modify success!');
                    _this.passwordeditable = false;
                    _this.snackBar.open('Password update success!', 'Close', {
                        duration: 2000,
                        panelClass: 'green-snackbar'
                    });
                    _this.ngOnInit();
                }
                else {
                    console.log('Update password error!');
                }
            }, function (err) { return console.log(err); });
        }
    };
    UserProfileComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(AvatarPreviewComponent, {
            width: '450px',
            data: { currentUser: this.currentUser }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.ngOnInit();
        });
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user-profile/user-profile.component.css")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_5__["fallIn"])(), Object(_router_animations__WEBPACK_IMPORTED_MODULE_5__["moveIn"])(), Object(_router_animations__WEBPACK_IMPORTED_MODULE_5__["moveInLeft"])()],
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _service_validate_service__WEBPACK_IMPORTED_MODULE_4__["ValidateService"], _service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());

var AvatarPreviewComponent = /** @class */ (function () {
    function AvatarPreviewComponent(snackBar, dialogRef, data, userService) {
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
        this.currentUser = new _model_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.selectedFile = null;
        this.avatar = '';
    }
    AvatarPreviewComponent.prototype.ngOnInit = function () {
        this.currentUser = this.data.currentUser;
        this.avatar = this.data.currentUser.avatar;
    };
    AvatarPreviewComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AvatarPreviewComponent.prototype.fileChangeEvent = function (event) {
        var _this = this;
        this.selectedFile = event.target.files[0];
        if (this.selectedFile) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = function (x) {
                _this.avatar = x.target.result;
            };
        }
    };
    AvatarPreviewComponent.prototype.updateAvatar = function () {
        var _this = this;
        var fd = new FormData();
        if (this.selectedFile == null)
            this.dialogRef.close();
        else {
            fd.append('avatar', this.selectedFile, this.selectedFile.name);
            this.userService.updateAvatar(this.currentUser, fd).subscribe(function (res) {
                if (res) {
                    console.log('Avatar modify success!');
                    _this.snackBar.open('Avatar update success!', 'Close', {
                        duration: 2000,
                        panelClass: 'green-snackbar'
                    });
                }
                else {
                    console.log('Update avatar error!');
                    _this.snackBar.open('Failed to update avatar!', 'Close', {
                        duration: 2000,
                        panelClass: 'red-snackbar'
                    });
                }
            }, function (err) {
                console.log(err);
                _this.snackBar.open('Failed to update avatar!', 'Close', {
                    duration: 2000,
                    panelClass: 'red-snackbar'
                });
            });
            this.dialogRef.close();
        }
    };
    AvatarPreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-avatarpreview',
            template: __webpack_require__(/*! ./avatarPreview.html */ "./src/app/user-profile/avatarPreview.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user-profile/user-profile.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], AvatarPreviewComponent);
    return AvatarPreviewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/youzhou/MyNewFBWebApp/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map