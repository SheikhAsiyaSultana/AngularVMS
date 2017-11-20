import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { CategoryComponent } from './category/category.component';
import { StatusComponent } from './status/status.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'create', component: CreateComponent},
    {path: 'search', component:ViewComponent},
    {path: 'byCategory', component:CategoryComponent},
    {path: 'byStatus', component:StatusComponent}
    
];

export const appRouterProviders: any[] = [];

export const routing: ModuleWithProviders =
  RouterModule.forRoot(appRoutes);