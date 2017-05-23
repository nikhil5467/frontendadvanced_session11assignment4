import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{login} from './login';
import { AppComponent }  from './app.component';
import{FormsModule} from '@angular/forms';
import {plist} from './plist';
import {discountpipe} from'./discountpipe';
import {service } from './service';
import {highlight} from './highlight';
import {todoservice} from './todo/todoservice';
import {RouterModule} from '@angular/router'
import{getallpostscomponent} from './post/getallpostscomponent';
import {HttpModule} from '@angular/http'; 
import{high} from './post/directive';
import{post} from './post/post';
import {addtodo} from './todo/addtodo';
import {gettodo} from './todo/gettodo';
import {edittodo} from './todo/edittodo';
@NgModule({
  imports:      [ BrowserModule,HttpModule,FormsModule,RouterModule.forRoot([
    {path:'allposts',component: getallpostscomponent},
       {path:'gettodo',component: gettodo},
          {path:'addtodo',component: addtodo},
          {path:'edittodo/:id',component: edittodo},

          {path:'**',component: gettodo}

  
     
    

  ]) ],
  declarations: [ AppComponent,login,plist,discountpipe,highlight,getallpostscomponent,post,high,gettodo,addtodo,edittodo ],
  bootstrap:    [ AppComponent ],
  providers:[service,todoservice]
})
export class AppModule { 
  constructor(){
console.log('module constructor called');
    }
}
