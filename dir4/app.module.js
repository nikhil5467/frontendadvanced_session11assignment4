"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var login_1 = require('./login');
var app_component_1 = require('./app.component');
var forms_1 = require('@angular/forms');
var plist_1 = require('./plist');
var discountpipe_1 = require('./discountpipe');
var service_1 = require('./service');
var highlight_1 = require('./highlight');
var todoservice_1 = require('./todo/todoservice');
var router_1 = require('@angular/router');
var getallpostscomponent_1 = require('./post/getallpostscomponent');
var http_1 = require('@angular/http');
var directive_1 = require('./post/directive');
var post_1 = require('./post/post');
var addtodo_1 = require('./todo/addtodo');
var gettodo_1 = require('./todo/gettodo');
var edittodo_1 = require('./todo/edittodo');
var AppModule = (function () {
    function AppModule() {
        console.log('module constructor called');
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, router_1.RouterModule.forRoot([
                    { path: 'allposts', component: getallpostscomponent_1.getallpostscomponent },
                    { path: 'gettodo', component: gettodo_1.gettodo },
                    { path: 'addtodo', component: addtodo_1.addtodo },
                    { path: 'edittodo/:id', component: edittodo_1.edittodo },
                    { path: '**', component: gettodo_1.gettodo }
                ])],
            declarations: [app_component_1.AppComponent, login_1.login, plist_1.plist, discountpipe_1.discountpipe, highlight_1.highlight, getallpostscomponent_1.getallpostscomponent, post_1.post, directive_1.high, gettodo_1.gettodo, addtodo_1.addtodo, edittodo_1.edittodo],
            bootstrap: [app_component_1.AppComponent],
            providers: [service_1.service, todoservice_1.todoservice]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map