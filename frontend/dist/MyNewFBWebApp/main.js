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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    {
        path: '',
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
    _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"]
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fullPage {\n    display: flex;\n    flex-direction: column;\n    min-height: 99vh;\n    position: relative;\n}\n\n\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fullPage\">\n    <app-header></app-header>\n    <router-outlet></router-outlet>\n    <app-footer></app-footer>\n</div>\n\n\n"

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
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _service_auth_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./service/auth.guard */ "./src/app/service/auth.guard.ts");
/* harmony import */ var _service_token_interceptor_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./service/token-interceptor.service */ "./src/app/service/token-interceptor.service.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["routingComponents"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_19__["AvatarPreviewComponent"]
            ],
            imports: [
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"]
            ],
            entryComponents: [
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_19__["AvatarPreviewComponent"]
            ],
            providers: [
                _service_user_service__WEBPACK_IMPORTED_MODULE_20__["UserService"],
                _service_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _service_token_interceptor_service__WEBPACK_IMPORTED_MODULE_22__["TokenInterceptorService"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
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

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n<mat-spinner></mat-spinner>\n"

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
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
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

module.exports = ".footer {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    padding: 1rem;\n    background-color: #efefef;\n    text-align: center;\n    margin-bottom: 0;\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"footer\">\n    Copyright 2017&copy; You Zhou\n</p>\n"

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

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spacer {\n    flex: 1 1 auto;\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <mat-toolbar class=\"mat-elevation-z5\" color=\"primary\">\n        <span style=\"text-align:center;\">GatorBook</span>\n        <span class=\"spacer\"></span>\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\" id=\"menubtn\">\n            <i class=\"material-icons\">account_circle</i>\n        </button>\n        <mat-menu #menu=\"matMenu\">\n            <button mat-menu-item routerLink=\"/dashboard\">\n                <mat-icon>dashboard</mat-icon>\n                <span>Dashboard</span>\n            </button>\n            <button mat-menu-item>\n                <mat-icon>lightbulb_outline</mat-icon>\n                <span>Notifications</span>\n            </button>\n            <button mat-menu-item id=\"userprofilebtn\" (click)=\"setUserProfile()\">\n                <mat-icon>person_outline</mat-icon>\n                <span>Profile</span>\n            </button>\n            <button mat-menu-item>\n                <mat-icon>settings</mat-icon>\n                <span>Setting</span>\n            </button>\n            <button mat-menu-item id=\"logout_header\" (click)=\"logoutUser()\">\n                <mat-icon>power_settings_new</mat-icon>\n                <span>Log Out</span>\n            </button>\n        </mat-menu>\n    </mat-toolbar>\n</header>"

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
    function User(_id, username, password, email, nickname, gender, dob, friend, avatar) {
        if (_id === void 0) { _id = ''; }
        if (username === void 0) { username = ''; }
        if (password === void 0) { password = ''; }
        if (email === void 0) { email = ''; }
        if (nickname === void 0) { nickname = ''; }
        if (gender === void 0) { gender = ''; }
        if (dob === void 0) { dob = new Date(); }
        if (friend === void 0) { friend = []; }
        if (avatar === void 0) { avatar = ''; }
        this._id = _id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.nickname = nickname;
        this.gender = gender;
        this.dob = dob;
        this.friend = friend;
        this.avatar = avatar;
    }
    return User;
}());



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
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/signinform/signinform.component.css":
/*!*****************************************************!*\
  !*** ./src/app/signinform/signinform.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    flex-grow: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.login-input-form {\n    display:block;\n    width: 100%;\n}\n.sign-in-button {\n    display: inline-block; \n    margin-top: 10px;\n}\n.sign-up-button {\n    display: inline-block;\n    padding-left: 10px;\n    margin-top: 10px;\n}\n"

/***/ }),

/***/ "./src/app/signinform/signinform.component.html":
/*!******************************************************!*\
  !*** ./src/app/signinform/signinform.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <form (submit)=\"loginUser($event)\">\n    <div>\n      <img width=\"500\" src=\"../assets/GatorBook.jpg\">\n    </div>\n    <div>\n      <img width=\"500\" src=\"../assets/gator.png\">\n    </div>\n    <mat-form-field class=\"login-input-form\">\n      <input matInput placeholder=\"Enter your username\" name=\"username\" [(ngModel)]=\"signinUser.username\">\n    </mat-form-field>\n    <mat-form-field class=\"login-input-form\">\n      <input type=\"password\" matInput placeholder=\"Enter your password\" name=\"password\" [type]=\"hide ? 'password' : 'text'\" [(ngModel)]=\"signinUser.password\">\n      <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n    </mat-form-field>\n    <div class=\"sign-in-button\">\n      <button color=\"primary\" id=\"signinbtn\" type=\"submit\" mat-raised-button>Sign In</button>   \n    </div>\n    <div class=\"sign-up-button\">\n      <button color=\"primary\" id=\"signupbtn\" routerLink=\"/signup\" mat-raised-button>Sign Up</button>\n    </div>\n  </form>\n</body>"

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
    function SigninformComponent(router, userService) {
        this.router = router;
        this.userService = userService;
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
        // TO-DO: validate input
        this.userService.loginUser(this.signinUser.username, this.signinUser.password)
            .subscribe(function (res) {
            console.log(res);
            if (res.success) {
                localStorage.setItem('token', res.token);
                _this.router.navigate(['dashboard']);
            }
            else {
            }
        }, function (err) { return console.log(err); });
    };
    SigninformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signinform',
            template: __webpack_require__(/*! ./signinform.component.html */ "./src/app/signinform/signinform.component.html"),
            styles: [__webpack_require__(/*! ./signinform.component.css */ "./src/app/signinform/signinform.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
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

module.exports = ":host {\n    flex-grow: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n  \n.example-full-width {\n    width: 100%;\n}\n  \n.regis-title {\n    font-weight:bold;\n    font-size: 40px;\n    margin:1.5em 0;\n    display:block;\n}\n  \n.button-style {\n    margin:2.5em 0;\n}\n  \n.gender-style {\n    margin:1.5em 0;\n}\n  \n.left-gender {\n    display: inline-block; \n}\n  \n.right-gender {\n    display: inline-block;\n    padding-left: 30px;\n}\n  \n.left-component {\n    display: inline-block; \n    margin-top: 15px;\n}\n  \n.right-component {\n    display: inline-block;\n    padding-left: 10px;\n    margin-top: 15px;\n}"

/***/ }),

/***/ "./src/app/signupform/signupform.component.html":
/*!******************************************************!*\
  !*** ./src/app/signupform/signupform.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"signupUser()\">\n    <div>\n      <label class=\"regis-title\">Sign Up</label>\n    </div>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Username\" name=\"signupusername\" [(ngModel)]=\"newUser.username\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Nickname\" name=\"nickname\" [(ngModel)]=\"newUser.nickname\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input type =\"password\" matInput placeholder=\"Password\" name=\"signuppassword\" [(ngModel)]=\"newUser.password\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input type =\"password\" matInput placeholder=\"Confirm Password\" name=\"confirmedpassword\" [(ngModel)]=\"confirmedpassword\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input type =\"text\" matInput placeholder=\"Email\" name=\"email\" [(ngModel)]=\"newUser.email\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput [matDatepicker]=\"picker\" placeholder=\"Birthdate\" name=\"dob\" [(ngModel)]=\"newUser.dob\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\n    </mat-form-field>\n    <div class=\"gender-style\">\n      <mat-radio-group name=\"gender\" [(ngModel)]=\"newUser.gender\">\n      <mat-radio-button class=\"left-gender\" value=\"Male\">Male</mat-radio-button>\n      <mat-radio-button class=\"right-gender\" value=\"Female\">Female</mat-radio-button>\n    </mat-radio-group>\n    </div>\n    <div class=\"left-component\">    \n      <button color =\"primary\" id=signupsubmitbtn type =\"submit\" mat-raised-button>Submit</button>\n    </div>\n    <div class=\"right-component\">\n        <button color =\"primary\" id=signupcancelbtn routerLink=\"/\" mat-raised-button>Cancel</button>\n    </div>\n  </form>\n"

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
    function SignupformComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.newUser = new _model_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    SignupformComponent.prototype.ngOnInit = function () {
    };
    SignupformComponent.prototype.signupUser = function () {
        var _this = this;
        console.log(this.newUser);
        this.userService.create(this.newUser)
            .subscribe(function (res) {
            console.log(res);
            if (res.success) {
                localStorage.setItem('token', res.token);
                _this.router.navigate(['dashboard']);
            }
            else {
                // TO_DO
            }
        }, function (err) { return console.log(err); });
    };
    SignupformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signupform',
            template: __webpack_require__(/*! ./signupform.component.html */ "./src/app/signupform/signupform.component.html"),
            styles: [__webpack_require__(/*! ./signupform.component.css */ "./src/app/signupform/signupform.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
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

module.exports = "<div>\n    <div>\n        <h1 class=\"avatar-header\">Change your Avatar</h1>\n    </div>\n    <div>\n        <img class=\"uploadImg\" src=\"{{ avatar || 'https://www.ischool.berkeley.edu/sites/default/files/default_images/avatar.jpeg' }}\">\n    </div>\n\n    <div class=\"input\">\n        <input class=\"ng-hide\" id=\"input-file-id\" (change)=\"fileChangeEvent($event)\" type=\"file\" #inputFile hidden/>\n        <button color=\"primary\" id=\"selectFile\" mat-raised-button>\n            <Label for=\"input-file-id\">\n                <i class=\"material-icons mat-18 icon-align\">insert_photo</i>\n                Photo\n            </Label>\n        </button>\n        <button class=\"button-spacer\" color=\"warn\" id=\"sendpost\" (click)=\"updateAvatar()\" mat-raised-button>Confirm</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    flex-grow: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* background-color:#EEEEEE; */\n  }\n  \n  .example-full-width {\n    width: 100%;\n  }\n  \n  .example-button-color {\n      color: #80CBC4\n  }\n  \n  .example-form {\n    min-width: 150px;\n    max-width: 600px;\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  \n  .post-image {\n    /* background-image: url('../../../assets/headerimage/head6.jpg'); */\n    background-size: cover;\n    width: 150px;\n    height: 150px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 80px;\n    margin-bottom: 100px;\n  }\n  \n  .example-card {\n    width: 800px;\n    padding:0 0 50px 0;\n    margin-bottom: 50px;\n  }\n  \n  .card-header {\n    background-size: cover;\n    background-image: url('mojave-day.jpg');\n    margin-bottom: 50px;\n  }\n  \n  .back-button {\n    margin-left: 100px;\n  }\n  \n  .uploadImg{\n    width: 100%;\n    height: 100%;\n    max-width: 300px;\n    padding:0 0 20px 0;\n  }\n  \n  .icon-align{\n    display: inline-flex;\n    vertical-align: middle;\n  }\n  \n  .input{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  \n  .button-spacer{\n    margin-left: 10px;\n  }\n  \n  .avatar-header{\n    align-items: center;\n    justify-content: center;\n    font: bold;\n  }"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card mat-elevation-z8\">\n  <mat-card-header class=\"card-header\">\n    <img mat-card-avatar class=\"post-image\" src=\"{{ currentUser.avatar || 'https://www.ischool.berkeley.edu/sites/default/files/default_images/avatar.jpeg'}}\"\n      (click)=\"openDialog()\">\n  </mat-card-header>\n\n  <form class=\"example-form\">\n    <!-- User name -->\n    <mat-form-field class=\"example-full-width\">\n      <input matInput id=\"prfusername\" placeholder=\"Username\" disabled value={{currentUser.username}}>\n    </mat-form-field>\n    <!-- Nick name -->\n    <mat-form-field class=\"example-full-width\">\n      <input matInput id=\"prfnickname\" placeholder=\"Nickname\" disabled value={{currentUser.nickname}}>\n    </mat-form-field>\n    <!-- Birthday -->\n    <mat-form-field class=\"example-full-width\">\n      <input matInput id=\"prfbirthday\" placeholder=\"Birthday\" disabled value={{currentUser.dob.toString().substring(0,10)}}>\n    </mat-form-field>\n    <!-- Email -->\n    <table class=\"example-full-width\" cellspacing=\"0\">\n      <tr>\n        <td>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput id=\"prfemail\" placeholder=\"Email\" disabled value={{currentUser.email}}>\n          </mat-form-field>\n        </td>\n        <td>\n          <button color=\"primary\" id=\"editemailbtn\" (click)=\"emaileditable=!emaileditable\" mat-raised-button>Edit</button>\n        </td>\n      </tr>\n    </table>\n    <table class=\"example-full-width\" cellspacing=\"0\" *ngIf=\"emaileditable\">\n      <tr>\n        <td>\n          <form class=\"example-form\">\n            <mat-form-field class=\"example-full-width\">\n              <input type=\"text\" matInput placeholder=\"New Email Address\" name=\"email\" [(ngModel)]=\"currentUser.email\">\n            </mat-form-field>\n          </form>\n        </td>\n        <td>\n          <button color=\"primary\" id=\"confirmemailbtn\" (click)=\"update_email(); emaileditable=!emaileditable;\" mat-raised-button>Confirm</button>\n        </td>\n      </tr>\n    </table>\n    <!-- Password -->\n    <table class=\"example-full-width\" cellspacing=\"0\">\n      <tr>\n        <td>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Password\" disabled value=....................>\n          </mat-form-field>\n        </td>\n        <td>\n          <button color=\"primary\" id=\"editpasswordbtn\" (click)=\"passwordeditable=!passwordeditable\" mat-raised-button>Edit</button> \n        </td>\n      </tr>\n    </table>\n    <table class=\"example-full-width\" cellspacing=\"0\" *ngIf=\"passwordeditable\">\n      <tr>\n        <td>\n          <form class=\"example-form\">\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"New Password\" name=\"password\" [type]=\"hide ? 'password' : 'text'\" [(ngModel)]=\"currentUser.password\">\n              <!-- <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon> -->\n            </mat-form-field>\n          </form>\n        </td>\n        <td>\n          <button color=\"primary\" id=\"confirmpasswordbtn\" (click)=\"update_password(); passwordeditable=!passwordeditable;\" mat-raised-button>Confirm</button>\n        </td>\n      </tr>\n    </table>\n\n  </form>\n\n  <button color=\"primary\" class=\"back-button\" routerLink=\"/dashboard\" mat-raised-button>Back to Homepage</button>\n\n\n</mat-card>"

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
    function UserProfileComponent(userService, dialog) {
        this.userService = userService;
        this.dialog = dialog;
        this.currentUser = new _model_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.hide = true;
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
        this.userService.updateEmail(this.currentUser).subscribe(function (res) {
            if (res) {
                console.log('Email modify success!');
                _this.ngOnInit();
            }
            else {
                console.log('Update email error!');
            }
        }, function (err) { return console.log(err); });
    };
    UserProfileComponent.prototype.update_password = function () {
        var _this = this;
        this.userService.updatePassword(this.currentUser).subscribe(function (res) {
            if (res) {
                console.log('Password modify success!');
                _this.ngOnInit();
            }
            else {
                console.log('Update password error!');
            }
        }, function (err) { return console.log(err); });
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
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());

var AvatarPreviewComponent = /** @class */ (function () {
    function AvatarPreviewComponent(dialogRef, data, userService) {
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
        var fd = new FormData();
        fd.append('avatar', this.selectedFile, this.selectedFile.name);
        this.userService.updateAvatar(this.currentUser, fd).subscribe(function (res) {
            if (res) {
                console.log('Avatar modify success!');
            }
            else {
                console.log('Update avatar error!');
            }
        }, function (err) { return console.log(err); });
        this.dialogRef.close();
    };
    AvatarPreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-avatarpreview',
            template: __webpack_require__(/*! ./avatarPreview.html */ "./src/app/user-profile/avatarPreview.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user-profile/user-profile.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
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