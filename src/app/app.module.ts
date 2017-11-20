import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Router } from '@angular/router'
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';
import {DropdownModule} from "ng2-dropdown";
import { ModalModule } from 'ng2-modal';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRouterProviders } from './app.routing';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import {DataTableModule} from "angular2-datatable";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { CategoryComponent } from './category/category.component';
import { StatusComponent } from './status/status.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    CreateComponent,
    ViewComponent,
    CategoryComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    routing,
    HttpModule,
    FormsModule,
    DropdownModule,
    ModalModule,
    Ng2AutoCompleteModule,
    DataTableModule
  ],
  providers: [ appRouterProviders,
        [{provide: APP_BASE_HREF, useValue: '/'}],
        [{provide: LocationStrategy, useClass: HashLocationStrategy}] //Adds # to URL
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
