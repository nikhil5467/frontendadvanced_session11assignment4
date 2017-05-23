import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {Http} from '@angular/http'; 
@Component({
  selector: 'my-app',
  template: ` <div class='container-fluid'>
            <div class='panel panel-default'>
                <div class='panel-heading'>
                    <h3 align='center'>ROOT COMPONENT</h3>
                </div>
                 
               <div class='panel-body'>
               <a routerLink="allposts">Get all post</a>
               <br/>
               <br/>
               <!--<router-outlet></router-outlet> -->
               <login></login>
               <plist></plist>
               <div class = "panel-body">
               <button class='btn btn-primary' (click)="GoToRetrieve()">Retrieve all ToDos</button>
                    <button class='btn btn-primary' (click)="GoToAdd()">Add a new ToDo</button>
                    <button class='btn btn-primary' (click)="GoToCC()">Countries and Cities</button>
                    <button class='btn btn-primary' (click)="GoToSearch()">Search a ToDo</button>
                    </div>
               <router-outlet>
               
               </router-outlet>
               </div>
               </div>
               
               
                `
})
export class AppComponent  {  
     constructor(private r:Router)
    {
        console.log("Root Component constructor called");
    }

    public GoToRetrieve():void
    {
        this.r.navigate(['gettodo']);
    }

    public GoToAdd():void
    {   
        this.r.navigate(['addtodo']);
    }
    public GoToCC():void
    {   
        this.r.navigate(['cc']);
    }
    public GoToSearch():void
    {   
        this.r.navigate(['search']);
    }
}
