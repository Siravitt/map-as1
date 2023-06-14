import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { Assignment4Component } from './assignment4/assignment4.component';
import { LocatorModule } from './locator/locator.module';
import { CommentsComponent } from './comments/comments.component';
import { FormComponent } from './comments/form/form.component';
import { ListComponent } from './comments/list/list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Assignment2Component,
    Assignment3Component,
    Assignment4Component,
    CommentsComponent,
    FormComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LocatorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
