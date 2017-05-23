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
var router_1 = require('@angular/router');
var AppComponent = (function () {
    function AppComponent(r) {
        this.r = r;
        console.log("Root Component constructor called");
    }
    AppComponent.prototype.GoToRetrieve = function () {
        this.r.navigate(['gettodo']);
    };
    AppComponent.prototype.GoToAdd = function () {
        this.r.navigate(['addtodo']);
    };
    AppComponent.prototype.GoToCC = function () {
        this.r.navigate(['cc']);
    };
    AppComponent.prototype.GoToSearch = function () {
        this.r.navigate(['search']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " <div class='container-fluid'>\n            <div class='panel panel-default'>\n                <div class='panel-heading'>\n                    <h3 align='center'>ROOT COMPONENT</h3>\n                </div>\n                 \n               <div class='panel-body'>\n               <a routerLink=\"allposts\">Get all post</a>\n               <br/>\n               <br/>\n               <!--<router-outlet></router-outlet> -->\n               <login></login>\n               <plist></plist>\n               <div class = \"panel-body\">\n               <button class='btn btn-primary' (click)=\"GoToRetrieve()\">Retrieve all ToDos</button>\n                    <button class='btn btn-primary' (click)=\"GoToAdd()\">Add a new ToDo</button>\n                    <button class='btn btn-primary' (click)=\"GoToCC()\">Countries and Cities</button>\n                    <button class='btn btn-primary' (click)=\"GoToSearch()\">Search a ToDo</button>\n                    </div>\n               <router-outlet></router-outlet>\n               </div>\n               </div>\n               \n               \n                "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map