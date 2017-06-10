webpackJsonp([1,5],{

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 152;


/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(166);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(230),
        styles: [__webpack_require__(220)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layout_layout_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_guards_login_guard__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_guards_unsaved_guard__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_shared_pipes_multiply_pipe__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_shared_pipes_filter_pipe__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_add_vechicle_add_vechicle_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_search_vechicle_search_vechicle_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_shared_services_vechicle_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_edit_vechicle_edit_vechicle_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__left_side_banner_left_side_banner_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_app_shared_services_user_service__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__layout_layout_component__["a" /* LayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_10_app_shared_pipes_multiply_pipe__["a" /* MultiplyPipe */],
            __WEBPACK_IMPORTED_MODULE_11_app_shared_pipes_filter_pipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_12__pages_add_vechicle_add_vechicle_component__["a" /* AddVechicleComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pages_search_vechicle_search_vechicle_component__["a" /* SearchVechicleComponent */],
            __WEBPACK_IMPORTED_MODULE_15__pages_edit_vechicle_edit_vechicle_component__["a" /* EditVechicleComponent */],
            __WEBPACK_IMPORTED_MODULE_16__left_side_banner_left_side_banner_component__["a" /* LeftSideBannerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__shared_guards_login_guard__["a" /* LoginGuard */], __WEBPACK_IMPORTED_MODULE_9__shared_guards_unsaved_guard__["a" /* UnsavedGuard */], __WEBPACK_IMPORTED_MODULE_14_app_shared_services_vechicle_service__["a" /* VechicleService */], __WEBPACK_IMPORTED_MODULE_17_app_shared_services_user_service__["a" /* UserService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_add_vechicle_add_vechicle_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_search_vechicle_search_vechicle_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_edit_vechicle_edit_vechicle_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_layout_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_guards_login_guard__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_guards_unsaved_guard__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });








var VECHICLE_ADMIN_ROUTES = [{
        path: 'add-vechicle',
        component: __WEBPACK_IMPORTED_MODULE_1__pages_add_vechicle_add_vechicle_component__["a" /* AddVechicleComponent */],
        canDeactivate: [__WEBPACK_IMPORTED_MODULE_7__shared_guards_unsaved_guard__["a" /* UnsavedGuard */]],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__shared_guards_login_guard__["a" /* LoginGuard */]]
    }, {
        path: 'edit-vechicle',
        component: __WEBPACK_IMPORTED_MODULE_3__pages_edit_vechicle_edit_vechicle_component__["a" /* EditVechicleComponent */],
        canDeactivate: [__WEBPACK_IMPORTED_MODULE_7__shared_guards_unsaved_guard__["a" /* UnsavedGuard */]],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__shared_guards_login_guard__["a" /* LoginGuard */]]
    },
    {
        path: 'search-vechicle',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_search_vechicle_search_vechicle_component__["a" /* SearchVechicleComponent */]
        // canDeactivate: [UnsavedGuard],
        // canActivate: [LoginGuard]
    }
];
var PAGE_ROUTES = [
    {
        path: 'vechicle',
        children: VECHICLE_ADMIN_ROUTES
    }
];
var APP_ROUTES = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_5__layout_layout_component__["a" /* LayoutComponent */],
        children: PAGE_ROUTES
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'guest-page',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_search_vechicle_search_vechicle_component__["a" /* SearchVechicleComponent */]
    },
    //match for empty
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/guest-page'
    },
    //file not found
    {
        path: '**',
        redirectTo: '/guest-page'
    }
];
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftSideBannerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LeftSideBannerComponent = (function () {
    function LeftSideBannerComponent() {
        this.urlVariable = 'https://static.wixstatic.com/media/98a7ed_6ed40a1d847b4f60be28c9fe224852e9~mv2.gif';
    }
    LeftSideBannerComponent.prototype.ngOnInit = function () {
    };
    return LeftSideBannerComponent;
}());
LeftSideBannerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-left-side-banner',
        template: __webpack_require__(232),
        styles: [__webpack_require__(222)]
    }),
    __metadata("design:paramtypes", [])
], LeftSideBannerComponent);

//# sourceMappingURL=left-side-banner.component.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
        this.filteredItems = [];
    }
    FilterPipe.prototype.transform = function (items, filter, brandFilter, conditionFilter) {
        if (!items || (!filter && !brandFilter && !conditionFilter)) {
            return items;
        }
        if (filter) {
            console.log('Apply 1st filter');
            items = items.filter(function (item) { return item.vechicleModel.toLowerCase().indexOf(filter.toLowerCase()) !== -1; });
            console.log(items.length);
        }
        if (items.length > 0 && brandFilter) {
            console.log('Apply 2nd filter');
            items = items.filter(function (item) { return item.brand.toLowerCase().indexOf(brandFilter.toLowerCase()) !== -1; });
        }
        if (items.length > 0 && conditionFilter) {
            console.log('Apply 3rd filter');
            items = items.filter(function (item) { return item.condition.toLowerCase().indexOf(conditionFilter.toLowerCase()) !== -1; });
        }
        return items;
        // To search in values of every variable of your object(item)
        // return items.filter(item => JSON.stringify(item).toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'filter'
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiplyPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MultiplyPipe = (function () {
    function MultiplyPipe() {
    }
    MultiplyPipe.prototype.transform = function (value, args, args2) {
        return value * args2;
    };
    return MultiplyPipe;
}());
MultiplyPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'multiply',
        pure: false
    })
], MultiplyPipe);

//# sourceMappingURL=multiply.pipe.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, ".active-route{color: red}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 230:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<!--<a routerLink=\"/tasklist\" routerLinkActive=\"active-route\">Task List</a>\r\n<a routerLink=\"/taskadd\" routerLinkActive=\"active-route\">Task Add</a>-->\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <div class=\"navbar-brand\" > <<< Osaka Motors >>></div>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li routerLinkActive=\"active\" *ngIf=\"adminUser\"><a [routerLink]=\"['/','vechicle','add-vechicle']\"><span class=\"glyphicon glyphicon-plus-sign\"> &nbsp;</span> Add Vechicle</a></li>\r\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['/','vechicle','search-vechicle']\"><span class=\"\tglyphicon glyphicon-search\">&nbsp; </span>Search Vechicle</a></li>\r\n        <!--<li routerLinkActive=\"active\"><a [routerLink]=\"['/','vechicle','edit-vechicle']\"><span class=\"glyphicon glyphicon-pencil\"> &nbsp;</span>Edit Vechicle</a></li>-->\r\n\r\n\r\n      </ul>\r\n      <form class=\"navbar-form navbar-left\" role=\"search\">\r\n        <div class=\"form-group\">\r\n        </div>\r\n\r\n      </form>\r\n      <ul class=\"nav navbar-nav navbar-right\" *ngIf=\"adminUser\">\r\n        <li><a (click)=\"logout()\">Logout</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<!-- Child routes-->\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ 232:
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <img [src]=\"urlVariable\" />\r\n</div>"

/***/ }),

/***/ 233:
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br>\r\n<br>\r\n\r\n\r\n<div class=\"container\">\r\n\r\n  <div class=\"col-md-4 col-md-offset-4\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\">Osaka Motors Admin Login</div>\r\n      <div *ngIf=\"error\" class=\"alert alert-dismissible alert-danger\">\r\n        <strong>{{message}}</strong>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <form #f class=\"form-horizontal\" (ngSubmit)=\"checkLogin(userName.value,password.value)\">\r\n          <div class=\"form-group\">\r\n            <label for=\"\" class=\"control-label col-md-4\">Username</label>\r\n            <div class=\"col-md-8\">\r\n              <!--<input type=\"text\" autocomplete=\"off\" required name=\"username\" [(ngModel)]=\"user.userName\" class=\"form-control\">-->\r\n\r\n              <input type=\"text\" required name=\"username\" autocomplete=\"off\" #userName class=\"form-control\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"\" class=\"control-label col-md-4\">Password</label>\r\n            <div class=\"col-md-8\">\r\n              <input type=\"password\" required name=\"pass\" autocomplete=\"off\" #password class=\"form-control\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group\">\r\n\r\n            <div class=\"col-md-12\">\r\n              <button class=\"btn-info btn-block btn\" type=\"submit\">Login</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n\r\n            <div class=\"col-md-12\">\r\n              <a [routerLink]=\"['/','guest-page']\"> Login as Guest User</a>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!--<br>\r\n\r\n<br>\r\n\r\n<br>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"container\">\r\n\r\n\r\n\r\n  <div class=\"col-md-4 col-md-offset-4\">\r\n\r\n    <div class=\"panel panel-default\">\r\n\r\n      <div class=\"panel-heading\">Login</div>\r\n\r\n      <div class=\"panel-body\">\r\n\r\n        <form class=\"form-horizontal\" (ngSubmit)=\"checkLogin(username.value,pass.value)\">\r\n\r\n          <div class=\"form-group\">\r\n\r\n            <label for=\"\" class=\"control-label col-md-4\">Username</label>\r\n\r\n            <div class=\"col-md-8\">\r\n\r\n              <input type=\"text\" #username autocomplete=\"off\" required name=\"username\" class=\"form-control\">\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n\r\n\r\n          <div class=\"form-group\">\r\n\r\n            <label for=\"\" class=\"control-label col-md-4\">Password</label>\r\n\r\n            <div class=\"col-md-8\">\r\n\r\n              <input type=\"password\" #pass autocomplete=\"off\" required name=\"pass\" class=\"form-control\">\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n          <div class=\"form-group\">\r\n\r\n\r\n\r\n            <div class=\"col-md-12\">\r\n\r\n              <button type=\"submit\" class=\"btn-info btn-block btn\">Login</button>\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </form>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>-->"

/***/ }),

/***/ 234:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form [formGroup]=\"userForm\" (ngSubmit)=\"handleForSubmit(userForm)\">\r\n    <div class=\"form-horizontal\">\r\n      <fieldset>\r\n        <legend>Add Vechicle to Sale</legend>\r\n\r\n\r\n        <div *ngIf=\"error\" class=\"alert alert-dismissible alert-danger\">\r\n          <strong>{{message}}</strong>\r\n        </div>\r\n        <div *ngIf=\"!error && message.length!=0\" class=\"alert alert-dismissible alert-success\">\r\n          <strong> {{message}}</strong>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"select\" class=\"col-lg-2 control-label\">Brand</label>\r\n          <div class=\"col-lg-4\">\r\n            <select class=\"form-control\" id=\"brand\" formControlName=\"brand\" placeholder=\"Vechicle Brand\" name=\"brand\">   \r\n            <option value=\"\">-- select --</option> \r\n                  \r\n            <option *ngFor=\"let brand of brands\"  value={{brand.value}}>{{brand.text}}</option>   \r\n                \r\n        </select>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputEmail\" class=\"col-lg-2 control-label\">Model</label>\r\n          <div class=\"col-lg-4\">\r\n            <input type=\"text\" class=\"form-control\" id=\"vechicleModel\" formControlName=\"vechicleModel\" name=\"vechicleModel\" placeholder=\"Vechicle Model\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"select\" let class=\"col-lg-2 control-label\">Transmission</label>\r\n\r\n          <div class=\"col-lg-4\">\r\n            <select class=\"form-control\" id=\"transmission\" formControlName=\"transmission\" placeholder=\"Transmission\" name=\"transmission\">    \r\n               <option *ngFor=\"let trs of transmissions\"  value={{trs.value}}>{{trs.label}}</option>             \r\n        </select>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"select\" class=\"col-lg-2 control-label\">Vechicle Type</label>\r\n          <div class=\"col-lg-4\">\r\n            <select class=\"form-control\" id=\"vtype\" formControlName=\"vtype\" placeholder=\"Vechicle Type\" name=\"vtype\">        \r\n            <option value=\"\">-- select --</option>    \r\n                <option value=\"bus\">Bus</option>\r\n                <option value=\"car\">Car</option>\r\n                <option value=\"motorcycle\">Motorcycle</option>\r\n                <option value=\"pick_up\">Pickup</option>\r\n                <option value=\"suv\">SUV</option>\r\n                <option value=\"truck\">Truck</option>\r\n                <option value=\"van\">Van</option>\r\n                <option value=\"other\">Other</option>             \r\n        </select>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"select\" class=\"col-lg-2 control-label\">Condition</label>\r\n          <div class=\"col-lg-4\">\r\n            <select class=\"form-control\" id=\"condition\" formControlName=\"condition\" placeholder=\"Condition\" name=\"condition\">    \r\n                <option value=\"\">-- select --</option>\r\n                \r\n                   <option *ngFor=\"let condition of conditions\"  value={{condition.value}}>{{condition.text}}</option>  \r\n             \r\n        </select>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"inputEmail\" class=\"col-lg-2 control-label\">Model Year</label>\r\n          <div class=\"col-lg-4\">\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"modelYear\" id=\"modelYear\" name=\"modelYear\" placeholder=\"Model Year\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputEmail\" class=\"col-lg-2 control-label\">Mileage (km)</label>\r\n          <div class=\"input-group col-lg-4\">\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"mileAge\" id=\"mileAge\" name=\"mileAge\" placeholder=\"Mileage (Km)\">\r\n            <span class=\"input-group-addon\">Km</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"inputEmail\" class=\"col-lg-2 control-label\">Price</label>\r\n          <div class=\"input-group col-lg-4\">\r\n            <span class=\"input-group-addon\">LKR</span><input type=\"text\" class=\"form-control\" id=\"price\" formControlName=\"price\"\r\n              name=\"price\" placeholder=\"Price (Rs)\">\r\n            <span class=\"input-group-addon\">\r\n            <input id=\"fields-price-negotiable\" name=\"priceNegotiable\" formControlName=\"priceNegotiable\" value=\"1\" type=\"checkbox\" class=\"ui-checkbox\">            Negotiable\r\n</span>\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <div class=\"form-group\" formArrayName=\"fuelTypes\">\r\n          <label for=\"inputPassword\" class=\"col-lg-2 control-label\">Fuel type</label>\r\n          <div class=\"col-lg-6\">\r\n\r\n            <div class=\"checkbox\" *ngFor=\"let item of fuelType;let i=index\">\r\n\r\n              <label>              \r\n                <input type=\"checkbox\" [name]=\"fuelType\"  >{{item.text}}</label>\r\n              <!--<input type=\"checkbox\" [name]=\"'fuelType'\" [formControlName]=\"i\">-->\r\n\r\n              <!--<label>           \r\n                \r\n            <input type=\"checkbox\" [name]=\"'fuelType'\" value=\"P\" [formControlName]=\"i\"  class=\"field_fuel_type\" >\r\n            Petrol\r\n          </label>\r\n              <label>           \r\n            <input type=\"checkbox\" [name]=\"'fuelType'\" value=\"D\" [formControlName]=\"'i=2'\" class=\"field_fuel_type\" >\r\n            Diesel\r\n          </label>\r\n              <label>           \r\n            <input type=\"checkbox\" [name]=\"'fuelType'\" value=\"H\" [formControlName]=\"i\"  class=\"field_fuel_type\" >\r\n            Hybrid\r\n          </label>-->\r\n              <!--  <label>           \r\n            <input type=\"checkbox\" name=\"fuel_type[]\" value=\"E\" class=\"field_fuel_type\" id=\"field_fuel_type\">\r\n            Electric\r\n          </label>\r\n              <label>           \r\n            <input type=\"checkbox\" name=\"fuel_type[]\" value=\"G\" class=\"field_fuel_type\" id=\"field_fuel_type\">\r\n            Gas\r\n          </label>\r\n              <label>           \r\n            <input type=\"checkbox\" name=\"fuel_type[]\" value=\"O\" class=\"field_fuel_type\" id=\"field_fuel_type\">\r\n            Other\r\n          </label>-->\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"inputEmail\" class=\"col-lg-2 control-label\">Image URL</label>\r\n          <div class=\"col-lg-4\">\r\n            <input type=\"text\" class=\"form-control\" id=\"imgUrl\" formControlName=\"imgUrl\" name=\"imgUrl\" placeholder=\"http://www.copyright-free-photos.org.uk/cars/mini-cooper.jpg\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"textArea\" class=\"col-lg-2 control-label\">Description</label>\r\n          <div class=\"col-lg-10\">\r\n            <textarea class=\"form-control\" rows=\"3\" formControlName=\"description\" id=\"description\" name=\"description\"></textarea>\r\n            <span class=\"help-block\">A longer block of help text that breaks onto a new line and may extend beyond one line.</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"inputEmail\" class=\"col-lg-2 control-label\">Contact Person Name</label>\r\n          <div class=\"col-lg-4\">\r\n            <input type=\"text\" class=\"form-control\" id=\"contactName\" formControlName=\"contactName\" name=\"contactName\" placeholder=\"Contact Person Name\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputEmail\" class=\"col-lg-2 control-label\">Phone No</label>\r\n          <div class=\"col-lg-4\">\r\n            <input type=\"text\" class=\"form-control\" id=\"contactPhone\" formControlName=\"contactPhone\" name=\"contactPhone\" placeholder=\"Contact No\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputEmail\" class=\"col-lg-2 control-label\">Place</label>\r\n          <div class=\"col-lg-4\">\r\n            <input type=\"text\" class=\"form-control\" id=\"contactPlace\" formControlName=\"contactPlace\" name=\"contactPlace\" placeholder=\"Location\">\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"form-group\">\r\n          <div class=\"col-lg-10 col-lg-offset-2\">\r\n            <button type=\"reset\" class=\"btn btn-default\">Cancel</button>\r\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ 235:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form [formGroup]=\"userForm\" (ngSubmit)=\"handleForSubmit(userForm)\">\r\n    <div class=\"form-horizontal\">\r\n      <fieldset>\r\n        <legend>Update Vechicle Details for Sale</legend>\r\n        <div *ngIf=\"error\" class=\"alert alert-dismissible alert-danger\">\r\n          <strong>{{message}}</strong>\r\n        </div>\r\n        <div *ngIf=\"!error && message.length!=0\" class=\"alert alert-dismissible alert-success\">\r\n          <strong> {{message}}</strong>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"select\" class=\"col-lg-2 control-label\">Brand</label>\r\n          <div class=\"col-lg-4\">\r\n            <select class=\"form-control\" id=\"brand\" formControlName=\"brand\" placeholder=\"Vechicle Brand\" name=\"brand\">   \r\n            <option value=\"\">-- select --</option> \r\n                  \r\n            <option *ngFor=\"let brand of brands\"  value={{brand.value}}>{{brand.text}}</option>   \r\n                \r\n        </select>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputEmail\" class=\"col-lg-2 control-label\">Model</label>\r\n          <div class=\"col-lg-4\">\r\n            <input type=\"text\" class=\"form-control\" id=\"vechicleModel\" formControlName=\"vechicleModel\" name=\"vechicleModel\" placeholder=\"Vechicle Model\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"select\" let class=\"col-lg-2 control-label\">Transmission</label>\r\n\r\n          <div class=\"col-lg-4\">\r\n            <select class=\"form-control\" id=\"transmission\" formControlName=\"transmission\" placeholder=\"Transmission\" name=\"transmission\">    \r\n               <option *ngFor=\"let trs of transmissions\"  value={{trs.value}}>{{trs.label}}</option>             \r\n        </select>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"select\" class=\"col-lg-2 control-label\">Vechicle Type</label>\r\n          <div class=\"col-lg-4\">\r\n            <select class=\"form-control\" id=\"vtype\" formControlName=\"vtype\" placeholder=\"Vechicle Type\" name=\"vtype\">        \r\n            <option value=\"\">-- select --</option>    \r\n                <option value=\"bus\">Bus</option>\r\n                <option value=\"car\">Car</option>\r\n                <option value=\"motorcycle\">Motorcycle</option>\r\n                <option value=\"pick_up\">Pickup</option>\r\n                <option value=\"suv\">SUV</option>\r\n                <option value=\"truck\">Truck</option>\r\n                <option value=\"van\">Van</option>\r\n                <option value=\"other\">Other</option>             \r\n        </select>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"select\" class=\"col-lg-2 control-label\">Condition</label>\r\n          <div class=\"col-lg-4\">\r\n            <select class=\"form-control\" id=\"condition\" formControlName=\"condition\" placeholder=\"Condition\" name=\"condition\">    \r\n                <option value=\"\">-- select --</option>\r\n                \r\n                   <option *ngFor=\"let condition of conditions\"  value={{condition.value}}>{{condition.text}}</option>  \r\n             \r\n        </select>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"inputEmail\" class=\"col-lg-2 control-label\">Model Year</label>\r\n          <div class=\"col-lg-4\">\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"modelYear\" id=\"modelYear\" name=\"modelYear\" placeholder=\"Model Year\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputEmail\" class=\"col-lg-2 control-label\">Mileage (km)</label>\r\n          <div class=\"input-group col-lg-4\">\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"mileAge\" id=\"mileAge\" name=\"mileAge\" placeholder=\"Mileage (Km)\">\r\n            <span class=\"input-group-addon\">Km</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"inputEmail\" class=\"col-lg-2 control-label\">Price</label>\r\n          <div class=\"input-group col-lg-4\">\r\n            <span class=\"input-group-addon\">LKR</span><input type=\"text\" class=\"form-control\" id=\"price\" formControlName=\"price\"\r\n              name=\"price\" placeholder=\"Price (Rs)\">\r\n            <span class=\"input-group-addon\">\r\n            <input id=\"fields-price-negotiable\" name=\"priceNegotiable\" formControlName=\"priceNegotiable\" value=\"1\" type=\"checkbox\" class=\"ui-checkbox\">            Negotiable\r\n</span>\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <div class=\"form-group\" formArrayName=\"fuelTypes\">\r\n          <label for=\"inputPassword\" class=\"col-lg-2 control-label\">Fuel type</label>\r\n          <div class=\"col-lg-6\">\r\n\r\n            <div class=\"checkbox\" *ngFor=\"let item of fuelType;let i=index\">\r\n\r\n              <label>              \r\n                <input type=\"checkbox\" [name]=\"fuelType\"  >{{item.text}}</label>\r\n              <!--<input type=\"checkbox\" [name]=\"'fuelType'\" [formControlName]=\"i\">-->\r\n\r\n              <!--<label>           \r\n                \r\n            <input type=\"checkbox\" [name]=\"'fuelType'\" value=\"P\" [formControlName]=\"i\"  class=\"field_fuel_type\" >\r\n            Petrol\r\n          </label>\r\n              <label>           \r\n            <input type=\"checkbox\" [name]=\"'fuelType'\" value=\"D\" [formControlName]=\"'i=2'\" class=\"field_fuel_type\" >\r\n            Diesel\r\n          </label>\r\n              <label>           \r\n            <input type=\"checkbox\" [name]=\"'fuelType'\" value=\"H\" [formControlName]=\"i\"  class=\"field_fuel_type\" >\r\n            Hybrid\r\n          </label>-->\r\n              <!--  <label>           \r\n            <input type=\"checkbox\" name=\"fuel_type[]\" value=\"E\" class=\"field_fuel_type\" id=\"field_fuel_type\">\r\n            Electric\r\n          </label>\r\n              <label>           \r\n            <input type=\"checkbox\" name=\"fuel_type[]\" value=\"G\" class=\"field_fuel_type\" id=\"field_fuel_type\">\r\n            Gas\r\n          </label>\r\n              <label>           \r\n            <input type=\"checkbox\" name=\"fuel_type[]\" value=\"O\" class=\"field_fuel_type\" id=\"field_fuel_type\">\r\n            Other\r\n          </label>-->\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"inputEmail\" class=\"col-lg-2 control-label\">Image URL</label>\r\n          <div class=\"col-lg-4\">\r\n            <input type=\"text\" class=\"form-control\" id=\"imgUrl\" formControlName=\"imgUrl\" name=\"imgUrl\" placeholder=\"Image Location\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"textArea\" class=\"col-lg-2 control-label\">Description</label>\r\n          <div class=\"col-lg-10\">\r\n            <textarea class=\"form-control\" rows=\"3\" id=\"description\" name=\"description\" formControlName=\"description\"></textarea>\r\n            <span class=\"help-block\">A longer block of help text that breaks onto a new line and may extend beyond one line.</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"inputEmail\" class=\"col-lg-2 control-label\">Contact Person Name</label>\r\n          <div class=\"col-lg-4\">\r\n            <input type=\"text\" class=\"form-control\" id=\"contactName\" formControlName=\"contactName\" name=\"contactName\" placeholder=\"Contact Person Name\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputEmail\" class=\"col-lg-2 control-label\">Phone No</label>\r\n          <div class=\"col-lg-4\">\r\n            <input type=\"text\" class=\"form-control\" id=\"contactPhone\" formControlName=\"contactPhone\" name=\"contactPhone\" placeholder=\"Contact No\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputEmail\" class=\"col-lg-2 control-label\">Place</label>\r\n          <div class=\"col-lg-4\">\r\n            <input type=\"text\" class=\"form-control\" id=\"contactPlace\" formControlName=\"contactPlace\" name=\"contactPlace\" placeholder=\"Location\">\r\n          </div>\r\n        </div>\r\n\r\n        <!--<div class=\"form-group\">\r\n          <label for=\"textArea\" class=\"col-lg-2 control-label\">Contact Details</label>\r\n          <div class=\"col-lg-10\">\r\n            <textarea class=\"form-control\" rows=\"3\" id=\"description\" name=\"description\"></textarea>\r\n\r\n          </div>\r\n        </div>-->\r\n\r\n        <div class=\"form-group\">\r\n          <div class=\"col-lg-10 col-lg-offset-2\">\r\n            <button type=\"reset\" class=\"btn btn-default\">Cancel</button>\r\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ 236:
/***/ (function(module, exports) {

module.exports = "<section id=\"container\" class=\"hr-menu\">\r\n\r\n  <!--header start-->\r\n  <nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n        <a class=\"navbar-brand\" href=\"#\">Find a perfect Vechicles</a>\r\n\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"navbar-form navbar-left\">\r\n        <select class=\"form-control\" id=\"brand\" [(ngModel)]=\"brand\" placeholder=\"Vechicle Brand\" id=\"brand\">   \r\n            <option value=\"\" selected>--All Brands--</option>                   \r\n            <option *ngFor=\"let brand of brands\"  value=\"{{brand.value}}\">{{brand.text}}</option>   \r\n                \r\n        </select>\r\n        <span class=\"icon-bar\"></span>\r\n        <select class=\"form-control\" id=\"condition\" [(ngModel)]=\"condition\" placeholder=\"Condition\" name=\"condition\">    \r\n                <option value=\"\" selected >--All Conditions--</option>\r\n                \r\n                   <option *ngFor=\"let condition of conditions\"  value=\"{{condition.value}}\">{{condition.text}}</option>  \r\n             \r\n        </select>\r\n        <span class=\"icon-bar\"></span>\r\n        <select class=\"form-control\" id=\"transmission\" name=\"transmission\" placeholder=\"Transmission\" name=\"transmission\">    \r\n              <option value=\"A\" >--All Transmission--</option>\r\n               <option *ngFor=\"let trs of transmissions\"  value={{trs.value}}>{{trs.label}}</option>             \r\n        </select>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchTerm\" placeholder=\"Search Vechicle Model\">\r\n        <button type=\"submit\" class=\"btn btn-default\">Search</button> </div>\r\n\r\n\r\n      <!--</form>-->\r\n      <ul class=\"nav navbar-nav navbar-right\" *ngIf=\"!adminUser\">\r\n        <li><a [routerLink]=\"['/','login']\">Admin <label class=\"glyphicon glyphicon-user\"></label> </a></li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n  <!--header end-->\r\n\r\n  <!--main content start-->\r\n  <section id=\"main-content\">\r\n    <section class=\"wrapper\">\r\n\r\n\r\n      <div class=\"row\">\r\n        <!--sidebar start-->\r\n        <div class=\"col-md-2 hidden-sm\">\r\n          <app-left-side-banner></app-left-side-banner>\r\n\r\n\r\n        </div>\r\n        <!--sidebar end-->\r\n\r\n        <!-- page start-->\r\n        <div class=\"col-sm-12 col-md-10\">\r\n          <!--breadcrumbs start -->\r\n          <div class=\"container-fluid\">\r\n\r\n\r\n\r\n            <div class=\"alert alert-dismissible alert-warning\" *ngIf=\"(vechicles | filter:searchTerm:brand:condition).length == 0\">\r\n\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n              <p>Sorry!, we are unable to find Vechicles for the searched criteria <span class=\"alert-link\">{{searchTerm}}</span>                Please refine your search and try again.</p>\r\n            </div>\r\n\r\n            <div class=\"alert alert-dismissible alert-success\" *ngIf=\"(vechicles | filter:searchTerm:brand:condition).length !== 0\">\r\n\r\n\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n              <p>Found Vechicles <span class=\"alert-link\">{{(vechicles | filter:searchTerm:brand:condition).length}}</span>.\r\n                available for sale.</p>\r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n            <div class=\"row\">\r\n\r\n\r\n\r\n              <div class=\"col-md-12\" *ngFor=\"let vechicle  of vechicles  | filter:searchTerm:brand:condition\">\r\n                <div class=\"panel panel-default\">\r\n                  <div class=\"panel-body\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-4\">\r\n                        <img src=\"{{vechicle.imgUrl}}\" class=\"img-responsive\">\r\n                      </div>\r\n                      <div class=\"col-md-8\">\r\n\r\n                        <h4>{{vechicle.brand}} - {{vechicle.vechicleModel}} {{vechicle.modelYear}}</h4>\r\n                        <div style=\"font-size: 14px;\"><label>Mileage :</label>{{vechicle.mileAge}} [{{vechicle.condition}}]</div>\r\n                        <div style=\"font-size: 14px;\"><label>Year :</label> {{vechicle.modelYear}} <label> Transmission :</label>{{vechicle.transmission}}\r\n                        </div>\r\n\r\n\r\n                        <div style=\"font-size: 14px;\"><label>Price :</label> LKR. {{vechicle.price}}\r\n                          <label *ngIf=\"vechicle.priceNegotiable\">Price Negotiable</label>\r\n                        </div>\r\n\r\n                        <div class=\"glyphicon glyphicon-user\"> {{vechicle.contactName}},{{vechicle.contactPlace}}\r\n                          <label class=\"glyphicon glyphicon-phone-alt\"> {{vechicle.contactPhone}}</label>\r\n                        </div>\r\n                        <div data-toggle=\"collapse\" data-target=\"#demo\"> More Info <span class=\"badge\">>>></span></div>\r\n                        <div id=\"demo\" class=\"collapse\" style=\"font-size: 14px;\">{{vechicle.description}}</div>\r\n\r\n                        <div *ngIf=\"adminUser\">\r\n                          <br>\r\n\r\n                          <button class=\"btn btn-danger btn-xs glyphicon glyphicon-remove-circle\" (click)=\"deleteVechicleFromSale(vechicle.id)\">\r\n                                <i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i>\r\n                                Delete</button>\r\n\r\n                          <button class=\"btn btn-success btn-xs glyphicon glyphicon-remove-circle\" (click)=\"editVechicleFromSale(vechicle.id)\">\r\n                                <i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i>\r\n                                Edit</button>\r\n\r\n\r\n\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <!-- page end-->\r\n      </div>\r\n\r\n    </section>\r\n  </section>\r\n  <!--main content end-->\r\n  <!--footer start-->\r\n\r\n</section>"

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return URL_CONST; });
/* unused harmony export FUEL_TYPE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TRANSMISSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return VECHICLE_BRANDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return VECHICLE_CONDITIONS; });
// URL Prefixes
// URL Prefixes
var URL_CONST = {
    BACK_END_HOST: 'http://localhost:3000/'
};
var FUEL_TYPE = [{ "text": "Petrol" }, { "text": "Diesel" }, { "text": "Hybrid" }, { "text": "Gas" }, { "text": "Other" }];
var TRANSMISSION = [
    { label: 'Automatic', value: 'A', autoSelected: true },
    { label: 'Manual', value: 'M', autoSelected: false },
    { label: 'Tiptronic', value: 'T', autoSelected: false },
    { label: 'Other', value: 'O', autoSelected: false }
];
var VECHICLE_BRANDS = [
    { value: "Abarth", text: "Abarth" },
    { value: "Acura", text: "Acura" },
    { value: "AlfaRomeo", text: "AlfaRomeo" },
    { value: "Ambassador", text: "Ambassador" },
    { value: "Aprilia", text: "Aprilia" },
    { value: "Audi", text: "Audi" },
    { value: "Austin", text: "Austin" },
    { value: "Bajaj", text: "Bajaj" },
    { value: "BMW", text: "BMW" },
    { value: "Chery", text: "Chery" },
    { value: "Chevrolet", text: "Chevrolet" },
    { value: "Chrysler", text: "Chrysler" },
    { value: "Citroen", text: "Citroen" },
    { value: "Daewoo", text: "Daewoo" },
    { value: "Daihatsu", text: "Daihatsu" },
    { value: "DFSK", text: "DFSK" },
    { value: "Dimo", text: "Dimo" },
    { value: "DskBenelli", text: "DskBenelli" },
    { value: "DTM", text: "DTM" },
    { value: "Ducati", text: "Ducati" },
    { value: "FAW", text: "FAW" },
    { value: "Fiat", text: "Fiat" },
    { value: "Ford", text: "Ford" },
    { value: "Foton", text: "Foton" },
    { value: "HarleyDavidson", text: "HarleyDavidson" },
    { value: "HeroHonda", text: "HeroHonda" },
    { value: "Honda", text: "Honda" },
    { value: "Hummer", text: "Hummer" },
    { value: "Hyundai", text: "Hyundai" },
    { value: "Isuzu", text: "Isuzu" },
    { value: "Jaguar", text: "Jaguar" },
    { value: "Jeep", text: "Jeep" },
    { value: "Jialing", text: "Jialing" },
    { value: "JMC", text: "JMC" },
    { value: "Kawasaki", text: "Kawasaki" },
    { value: "Kia", text: "Kia" },
    { value: "Kinetic", text: "Kinetic" },
    { value: "Komatsu", text: "Komatsu" },
    { value: "Ktm", text: "Ktm" },
    { value: "Lancia", text: "Lancia" },
    { value: "LandRover", text: "LandRover" },
    { value: "Lexus", text: "Lexus" },
    { value: "Leyland", text: "Leyland" },
    { value: "Mahindra", text: "Mahindra" },
    { value: "MarutiSuzuki", text: "MarutiSuzuki" },
    { value: "Mazda", text: "Mazda" },
    { value: "Mercedes-Benz", text: "Mercedes-Benz" },
    { value: "Micro", text: "Micro" },
    { value: "MINI", text: "MINI" },
    { value: "Mitsubishi", text: "Mitsubishi" },
    { value: "MorrisGarage", text: "MorrisGarage" },
    { value: "Nissan", text: "Nissan" },
    { value: "Opel", text: "Opel" },
    { value: "Perodua", text: "Perodua" },
    { value: "Peugeot", text: "Peugeot" },
    { value: "Porsche", text: "Porsche" },
    { value: "Proton", text: "Proton" },
    { value: "Renault", text: "Renault" },
    { value: "Rover", text: "Rover" },
    { value: "RoyalEnfield", text: "RoyalEnfield" },
    { value: "Simca", text: "Simca" },
    { value: "Skoda", text: "Skoda" },
    { value: "Ssangyong", text: "Ssangyong" },
    { value: "Subaru", text: "Subaru" },
    { value: "Suzuki", text: "Suzuki" },
    { value: "Tata", text: "Tata" },
    { value: "Tesla", text: "Tesla" },
    { value: "ThaiRungUnion", text: "ThaiRungUnion" },
    { value: "Toyota", text: "Toyota" },
    { value: "Triumph", text: "Triumph" },
    { value: "Tvs", text: "Tvs" },
    { value: "Vauxhall", text: "Vauxhall" },
    { value: "Volkswagen", text: "Volkswagen" },
    { value: "Volvo", text: "Volvo" },
    { value: "Willys", text: "Willys" },
    { value: "Yamaha", text: "Yamaha" },
    { value: "Zotye", text: "Zotye" }
];
var VECHICLE_CONDITIONS = [{ text: "New", value: "N" }, { text: "Used", value: "U" }, { text: "Reconditioned", value: "R" }];
//# sourceMappingURL=common.constants.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_config_common_constants__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { Cookie } from 'cooki/ng2-cookies';
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.adminLogin = function (params) {
        // return this.http.post(URL_CONST.BACK_END_HOST + 'user/authenticate', params, this.getRequestOptions())
        //   .map((response: Response) => response.json(
        //   ));
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4_app_shared_config_common_constants__["a" /* URL_CONST */].BACK_END_HOST + 'user/authenticate', params, { headers: this.getHeader() }).map(function (response) {
            console.log(response.json());
            return response.json();
        }).catch(function (data) {
            // console.log("ERROR @ Service", data);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(data);
        });
    };
    UserService.prototype.getRequestOptions = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: this.getHeader() });
    };
    UserService.prototype.getHeader = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    UserService.prototype.isAuthorized = function () {
        this.setToken();
        if ((this.userID && this.token))
            return true;
        return false;
    };
    UserService.prototype.saveToken = function (tokenString, id) {
        sessionStorage.setItem('loginFLag', 'true');
        sessionStorage.setItem('_token', tokenString);
        sessionStorage.setItem('_user', id);
        this.setToken();
    };
    UserService.prototype.logout = function () {
        sessionStorage.setItem('loginFLag', 'false');
        sessionStorage.setItem('_token', null);
        sessionStorage.setItem('_user', null);
        this.setToken();
        sessionStorage.clear();
    };
    UserService.prototype.setToken = function () {
        this.token = sessionStorage.getItem('_token');
        this.userID = sessionStorage.getItem('_user');
    };
    UserService.prototype.getToken = function () {
        return this.token;
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_config_common_constants__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_services_user_service__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VechicleService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






;
var VechicleService = (function () {
    function VechicleService(http, userService) {
        this.http = http;
        this.userService = userService;
    }
    VechicleService.prototype.addVechicleForSale = function (vechicle) {
        console.log("Inside Add Vechicle Services", vechicle);
        // return this.http.post(URL_CONST.BACK_END_HOST + 'vechicle', vechicle, { headers: this.getHeader() }).toPromise()
        //   .then(this.extractData)
        //   .catch(this.handleErrorPromise);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4_app_shared_config_common_constants__["a" /* URL_CONST */].BACK_END_HOST + 'vechicle', vechicle, this.getRequestOptions())
            .map(function (response) { return response.json(); });
    };
    VechicleService.prototype.searchForVechicle = function () {
        console.log("Inside Search Vechicle Services");
    };
    VechicleService.prototype.getPost = function () {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4_app_shared_config_common_constants__["a" /* URL_CONST */].BACK_END_HOST + 'vechicle', { headers: this.getHeader() }).map(function (response) {
            console.log(response.json());
            // return response.json();
            var vechicles = response.json().map(function (item) {
                var vechicle = {};
                vechicle.id = item._id;
                vechicle.brand = item.brand;
                vechicle.vechicleModel = item.vechicleModel;
                vechicle.transmission = _this.transmissionWrapper(item.transmission);
                vechicle.vtype = item.vtype;
                vechicle.condition = _this.conditionWrapper(item.condition);
                vechicle.modelYear = item.modelYear;
                vechicle.mileAge = item.mileAge;
                vechicle.price = item.price;
                vechicle.priceNegotiable = item.priceNegotiable;
                // vechicle.fuelTypes = item.fuelTypes;
                vechicle.contactName = item.contactName;
                vechicle.contactPlace = item.contactPlace;
                vechicle.contactPhone = item.contactPhone;
                vechicle.description = item.description;
                vechicle.imgUrl = item.imgUrl;
                if (vechicle.imgUrl == null || vechicle.imgUrl == "") {
                    vechicle.imgUrl = "http://www.copyright-free-photos.org.uk/cars/mini-cooper.jpg";
                }
                return vechicle;
            });
            return vechicles;
        }).catch(function (data) {
            console.log("ERROR @ Service", data);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(data);
        });
    };
    VechicleService.prototype.getRequestOptions = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: this.getHeader() });
    };
    VechicleService.prototype.getHeader = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        // headers.append('x-access-token', this.userService.getToken());
        return headers;
    };
    VechicleService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    VechicleService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.message || error);
    };
    VechicleService.prototype.handleErrorPromise = function (error) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    };
    VechicleService.prototype.deleteVechicleFromSale = function (itemId) {
        console.log("Inside Delete Vechicle Service", itemId);
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_4_app_shared_config_common_constants__["a" /* URL_CONST */].BACK_END_HOST + 'vechicle/' + itemId, { headers: this.getHeader() }).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    };
    VechicleService.prototype.setEditableVechicleReference = function (vechicleIdRef) {
        this.vechicleId = vechicleIdRef;
    };
    VechicleService.prototype.clearEditableVechicleReference = function () {
        this.vechicleId = null;
    };
    VechicleService.prototype.getEditableVechicleReference = function () {
        return this.vechicleId;
    };
    VechicleService.prototype.getVechicleById = function (itemId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4_app_shared_config_common_constants__["a" /* URL_CONST */].BACK_END_HOST + 'vechicle/' + itemId, { headers: this.getHeader() }).map(function (response) {
            // console.log(response.json());
            return response.json();
        }).catch(function (data) {
            console.log("ERROR @ getVechicleById Service", data);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(data);
        });
    };
    VechicleService.prototype.editVechicleForSale = function (vechicle) {
        console.log("Inside Edit Vechicle Service");
        return this.http.put(__WEBPACK_IMPORTED_MODULE_4_app_shared_config_common_constants__["a" /* URL_CONST */].BACK_END_HOST + 'vechicle/' + vechicle.id, vechicle, this.getRequestOptions())
            .map(function (response) { return response.json(); });
    };
    VechicleService.prototype.transmissionWrapper = function (transmission) {
        switch (transmission) {
            case "A":
                transmission = "Auto";
                break;
            case "M":
                transmission = "Manual";
                break;
            case "T":
                transmission = "Tiptronic";
                break;
            default:
                transmission = "Other";
                break;
        }
        return transmission;
    };
    VechicleService.prototype.conditionWrapper = function (condition) {
        switch (condition) {
            case "N":
                condition = "Brand New";
                break;
            case "U":
                condition = "Used";
                break;
            case "R":
                condition = "Reconditioned";
                break;
            default:
                condition = "";
                break;
        }
        return condition;
    };
    return VechicleService;
}());
VechicleService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_app_shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_shared_services_user_service__["a" /* UserService */]) === "function" && _b || Object])
], VechicleService);

var _a, _b;
//# sourceMappingURL=vechicle.service.js.map

/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(153);


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_user_service__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LayoutComponent = (function () {
    function LayoutComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.searchText = "";
        this.adminUser = false;
        this.adminUser = this.userService.isAuthorized();
    }
    LayoutComponent.prototype.ngOnInit = function () {
        if (!this.adminUser) {
            this.router.navigate(['/', 'guest-page']);
        }
    };
    LayoutComponent.prototype.logout = function () {
        this.userService.logout();
        this.router.navigate(['/', 'guest-page']);
    };
    LayoutComponent.prototype.search = function () {
        console.log('Search clicked ', this.searchText);
    };
    return LayoutComponent;
}());
LayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-layout',
        template: __webpack_require__(231),
        styles: [__webpack_require__(221)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_shared_services_user_service__["a" /* UserService */]) === "function" && _b || Object])
], LayoutComponent);

var _a, _b;
//# sourceMappingURL=layout.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_user_service__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        // user: Object = { userName: '', password: '' };
        this.error = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.checkLogin = function (userName, password) {
        var _this = this;
        // console.log(this.user);
        if (!userName || !password) {
            this.error = true;
            this.message = 'Username & Password required';
        }
        else {
            this.error = false;
            this.userService.adminLogin({ name: userName, password: password })
                .subscribe(function (data) {
                console.log('Login response', data);
                _this.userService.saveToken(data['token'], data['id']);
                _this.router.navigate(['/', 'vechicle', 'search-vechicle']);
            }, function (err) {
                _this.error = true;
                console.log('Error @ adminLogin', err);
                _this.message = 'Invalid username or password';
            });
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(233),
        styles: [__webpack_require__(223)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_shared_services_user_service__["a" /* UserService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_config_common_constants__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_vechicle_service__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddVechicleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




;
var AddVechicleComponent = (function () {
    function AddVechicleComponent(formBuilder, vechicleService) {
        this.formBuilder = formBuilder;
        this.vechicleService = vechicleService;
        this.transmissions = [];
        this.brands = [];
        this.conditions = [];
        this.fuelType = [{ "text": "Petrol" }, { "text": "Diesel" }, { "text": "Hybrid" }, { "text": "Gas" }, { "text": "Other" }];
        this.isUnsaved = false;
        // fuelTypesArray:Array<any>= [];
        this.error = false;
        this.message = '';
        this.transmissions = __WEBPACK_IMPORTED_MODULE_2_app_shared_config_common_constants__["b" /* TRANSMISSION */];
        this.brands = __WEBPACK_IMPORTED_MODULE_2_app_shared_config_common_constants__["c" /* VECHICLE_BRANDS */];
        this.conditions = __WEBPACK_IMPORTED_MODULE_2_app_shared_config_common_constants__["d" /* VECHICLE_CONDITIONS */];
        this.userForm = formBuilder.group({
            'brand': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            'vechicleModel': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            'transmission': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            'vtype': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            'condition': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            'modelYear': ['', []],
            'mileAge': ['', []],
            'price': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            'priceNegotiable': ['', []],
            'fuelType[]': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            'contactName': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            'contactPlace': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            'contactPhone': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            'description': ['', []],
            'imgUrl': ['', []],
            'fuelTypes': formBuilder.array([
                [
                    [false, false, false], []
                ]
            ])
        });
    }
    AddVechicleComponent.prototype.ngOnInit = function () {
    };
    AddVechicleComponent.prototype.handleForSubmit = function (form) {
        var _this = this;
        // console.log('Form Submitted ', form.value);
        console.log(this.userForm.value);
        console.log(this.userForm.value['imgUrl']);
        //  let vechicle :VechicleTO = null;
        var vechicle = {};
        vechicle.brand = this.userForm.value['brand'];
        vechicle.vechicleModel = this.userForm.value['vechicleModel'];
        vechicle.transmission = this.userForm.value['transmission'];
        vechicle.vtype = this.userForm.value['vtype'];
        vechicle.condition = this.userForm.value['condition'];
        vechicle.modelYear = this.userForm.value['modelYear'];
        vechicle.mileAge = this.userForm.value['mileAge'];
        vechicle.priceNegotiable = this.userForm.value['priceNegotiable'];
        vechicle.price = this.userForm.value['price'];
        vechicle.contactName = this.userForm.value['contactName'];
        vechicle.contactPlace = this.userForm.value['contactPlace'];
        vechicle.contactPhone = this.userForm.value['contactPhone'];
        vechicle.description = this.userForm.value['description'];
        vechicle.imgUrl = this.userForm.value['imgUrl'];
        // let result = this.vechicleService.addVechicleForSale(vechicle);
        // console.log('Vechiclse add for sale ', result);
        this.error = false;
        this.vechicleService.addVechicleForSale(vechicle).subscribe(function (data) {
            console.log(data);
            _this.message = "Vechicle Added Successfuly to the sale!!!";
        }, function (err) {
            _this.error = true;
        });
        // console.log(result['ZoneAwarePromise']['__zone_symbol__state']);
    };
    AddVechicleComponent.prototype.checkUnsaved = function () {
        return this.isUnsaved;
    };
    AddVechicleComponent.prototype.editVechicle = function (vechicleId) {
        console.log('Inside Edit Vechcle', vechicleId);
    };
    return AddVechicleComponent;
}());
AddVechicleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-add-vechicle',
        template: __webpack_require__(234),
        styles: [__webpack_require__(224)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_shared_services_vechicle_service__["a" /* VechicleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_shared_services_vechicle_service__["a" /* VechicleService */]) === "function" && _b || Object])
], AddVechicleComponent);

var _a, _b;
//# sourceMappingURL=add-vechicle.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_config_common_constants__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_vechicle_service__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditVechicleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditVechicleComponent = (function () {
    function EditVechicleComponent(formBuilder, vechicleService) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.vechicleService = vechicleService;
        this.isUnsaved = false;
        this.transmissions = [];
        this.brands = [];
        this.conditions = [];
        this.fuelType = [{ "text": "Petrol" }, { "text": "Diesel" }, { "text": "Hybrid" }, { "text": "Gas" }, { "text": "Other" }];
        // isUnsaved: boolean = false;
        // userForm: FormGroup;
        // fuelTypesArray:Array<any>= [];
        this.error = false;
        this.message = '';
        this.transmissions = __WEBPACK_IMPORTED_MODULE_2_app_shared_config_common_constants__["b" /* TRANSMISSION */];
        this.brands = __WEBPACK_IMPORTED_MODULE_2_app_shared_config_common_constants__["c" /* VECHICLE_BRANDS */];
        this.conditions = __WEBPACK_IMPORTED_MODULE_2_app_shared_config_common_constants__["d" /* VECHICLE_CONDITIONS */];
        this.vechicleId = this.vechicleService.getEditableVechicleReference();
        console.log('Inside Edit Vechicle', this.vechicleId);
        this.vechicleService.getVechicleById(this.vechicleId).subscribe(function (data) {
            console.log(data);
            console.log('Inside edit loaded');
            console.log(data.brand);
            console.log(data._id);
            _this.vechicle = data;
            _this.brand = data.brand;
            _this.userForm = formBuilder.group({
                'brand': [data.brand, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
                'vechicleModel': [data.vechicleModel, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
                'transmission': [data.transmission, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
                'vtype': [data.vtype, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
                'condition': [data.condition, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
                'modelYear': [data.modelYear, []],
                'mileAge': [data.mileAge, []],
                'price': [data.price, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
                'priceNegotiable': [data.priceNegotiable, []],
                'fuelType[]': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
                'contactName': [data.contactName, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
                'contactPlace': [data.contactPlace, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
                'contactPhone': [data.contactPhone, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
                'imgUrl': [data.imgUrl, []],
                'description': [data.description, []],
                'fuelTypes': formBuilder.array([
                    [
                        [false, false, false], []
                    ]
                ])
            });
            // this.message = "Vechicle Added Successfuly to the sale!!!"
        }, function (err) {
            // this.error = true;
        });
        // console.log('Out side', this.brand);
        this.userForm = formBuilder.group({
            'brand': [this.brand, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            'vechicleModel': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            'transmission': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            'vtype': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            'condition': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            'modelYear': ['', []],
            'mileAge': ['', []],
            'price': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            'priceNegotiable': ['', []],
            'fuelType[]': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            'contactName': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            'contactPlace': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            'contactPhone': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            'imgUrl': ['', []],
            'description': ['', []],
            'fuelTypes': formBuilder.array([
                [
                    [false, false, false], []
                ]
            ])
        });
    }
    EditVechicleComponent.prototype.ngOnInit = function () {
    };
    EditVechicleComponent.prototype.handleForSubmit = function (form) {
        var _this = this;
        // console.log('Form Submitted ', form.value);
        console.log(this.userForm.value);
        console.log(this.userForm.value['imgUrl']);
        //  let vechicle :VechicleTO = null;
        var vechicle = {};
        vechicle.id = this.vechicleId;
        vechicle.brand = this.userForm.value['brand'];
        vechicle.vechicleModel = this.userForm.value['vechicleModel'];
        vechicle.transmission = this.userForm.value['transmission'];
        vechicle.vtype = this.userForm.value['vtype'];
        vechicle.condition = this.userForm.value['condition'];
        vechicle.modelYear = this.userForm.value['modelYear'];
        vechicle.mileAge = this.userForm.value['mileAge'];
        vechicle.priceNegotiable = this.userForm.value['priceNegotiable'];
        vechicle.price = this.userForm.value['price'];
        vechicle.contactName = this.userForm.value['contactName'];
        vechicle.contactPlace = this.userForm.value['contactPlace'];
        vechicle.contactPhone = this.userForm.value['contactPhone'];
        vechicle.description = this.userForm.value['description'];
        vechicle.imgUrl = this.userForm.value['imgUrl'];
        this.error = false;
        this.message = "Vechicle Details Updated Successfuly!";
        console.log(vechicle);
        this.vechicleService.editVechicleForSale(vechicle).subscribe(function (data) {
            console.log(data);
            _this.message = "Vechicle Details Updated Successfuly!";
        }, function (err) {
            _this.error = true;
        });
    };
    EditVechicleComponent.prototype.checkUnsaved = function () {
        return this.isUnsaved;
    };
    return EditVechicleComponent;
}());
EditVechicleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-edit-vechicle',
        template: __webpack_require__(235),
        styles: [__webpack_require__(225)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_shared_services_vechicle_service__["a" /* VechicleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_shared_services_vechicle_service__["a" /* VechicleService */]) === "function" && _b || Object])
], EditVechicleComponent);

var _a, _b;
//# sourceMappingURL=edit-vechicle.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_config_common_constants__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_vechicle_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_services_user_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchVechicleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchVechicleComponent = (function () {
    function SearchVechicleComponent(formBuilder, vechicleService, router, userService) {
        this.formBuilder = formBuilder;
        this.vechicleService = vechicleService;
        this.router = router;
        this.userService = userService;
        this.transmissions = [];
        this.brands = [];
        this.conditions = [];
        this.vechicles = [];
        // hideme: <any>=[];
        this.currentDate = new Date();
        this.adminUser = false;
        this.transmissions = __WEBPACK_IMPORTED_MODULE_1_app_shared_config_common_constants__["b" /* TRANSMISSION */];
        this.brands = __WEBPACK_IMPORTED_MODULE_1_app_shared_config_common_constants__["c" /* VECHICLE_BRANDS */];
        this.conditions = __WEBPACK_IMPORTED_MODULE_1_app_shared_config_common_constants__["d" /* VECHICLE_CONDITIONS */];
        this.adminUser = this.userService.isAuthorized();
        console.log('this.userService.isAuthorized()', this.userService.isAuthorized());
        this.loadVechicle();
        // this.vechicleService.getPost().subscribe((data) => this.vechicles = data, (err) => { console.log('Error Handled at componenet', err); });
        // this.vechicles = this.vechicleService.getPost();
        // this.vechicles = DUMMY_VECHICLE_LIST;
        this.userForm = formBuilder.group({
            'brand': ['A', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]],
            'vechicleModel': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]],
            'transmission': ['A', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]],
            'vtype': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]],
            'condition': ['A', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]],
            'modelYear': ['', []],
            'mileAge': ['', []],
            'price': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]],
            'priceNegotiable': ['', []],
            'fuelType[]': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]],
            'fuelTypes': formBuilder.array([
                [
                    [false, false, false], []
                ]
            ])
        });
    }
    SearchVechicleComponent.prototype.ngOnInit = function () {
    };
    SearchVechicleComponent.prototype.loadVechicle = function () {
        var _this = this;
        this.adminUser = this.userService.isAuthorized();
        this.vechicleService.getPost().subscribe(function (data) { return _this.vechicles = data; }, function (err) { console.log('Error Handled at componenet', err); });
    };
    SearchVechicleComponent.prototype.handleForSubmit = function (form) {
        // console.log('Form Submitted ', form.value);
        console.log(this.userForm);
        this.vechicleService.searchForVechicle();
    };
    SearchVechicleComponent.prototype.deleteVechicleFromSale = function (vechicleId) {
        // localhost:3000/wizard/59106c40a3acac27dc01390c
        console.log('deleteVechicleFromSale ', vechicleId);
        if (confirm('Do you want to remove this vechicle from site?')) {
            this.vechicleService.deleteVechicleFromSale(vechicleId);
            this.loadVechicle();
        }
    };
    SearchVechicleComponent.prototype.editVechicleFromSale = function (vechicleId) {
        // localhost:3000/wizard/59106c40a3acac27dc01390c
        console.log('Edit Vechicle Detected ', vechicleId);
        this.vechicleService.setEditableVechicleReference(vechicleId);
        this.router.navigate(['/', 'vechicle', 'edit-vechicle']);
    };
    return SearchVechicleComponent;
}());
SearchVechicleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-search-vechicle',
        template: __webpack_require__(236),
        styles: [__webpack_require__(226)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_shared_services_vechicle_service__["a" /* VechicleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_shared_services_vechicle_service__["a" /* VechicleService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_app_shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_shared_services_user_service__["a" /* UserService */]) === "function" && _d || Object])
], SearchVechicleComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=search-vechicle.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginGuard = (function () {
    function LoginGuard(router) {
        this.router = router;
    }
    LoginGuard.prototype.canActivate = function (router, state) {
        console.log('You are logged in ' + sessionStorage.getItem('loginFLag'));
        if (sessionStorage.getItem('loginFLag') === 'true') {
            //activate this guard if logged in
            return true;
        }
        else {
            // else return to login
            console.log('You are not logged in');
            this.router.navigate(['/', 'login']);
            return false;
        }
    };
    return LoginGuard;
}());
LoginGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], LoginGuard);

var _a;
//# sourceMappingURL=login.guard.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnsavedGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnsavedGuard = (function () {
    function UnsavedGuard(router) {
        this.router = router;
    }
    UnsavedGuard.prototype.canDeactivate = function (target) {
        if (target.checkUnsaved()) {
            return confirm('There are unsaved changes, Are you sure?');
        }
        return true;
    };
    return UnsavedGuard;
}());
UnsavedGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], UnsavedGuard);

var _a;
//# sourceMappingURL=unsaved.guard.js.map

/***/ })

},[508]);
//# sourceMappingURL=main.bundle.js.map