import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Router } from '@angular/router'
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';
import {DropdownModule} from "ng2-dropdown";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRouterProviders } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { ViewComponent } from './view/view.component';
import { CategoryComponent } from './category/category.component';
import { StatusComponent } from './status/status.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent,
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
    DropdownModule
  ],
  providers: [ appRouterProviders,
        [{provide: APP_BASE_HREF, useValue: '/'}],
        [{provide: LocationStrategy, useClass: HashLocationStrategy}]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
