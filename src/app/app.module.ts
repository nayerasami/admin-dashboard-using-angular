import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { WrapperComponent } from './Components/wrapper/wrapper.component';
import { HeaderComponent } from './Components/header/header.component';
import { ManageProductsComponent } from './Components/manage-products/manage-products.component';
import { ManageUsersComponent } from './Components/manage-users/manage-users.component';
import { ManageCategoriesComponent } from './Components/manage-categories/manage-categories.component';
import { ManageOrdersComponent } from './Components/manage-orders/manage-orders.component';
import { ManageBrandsComponent } from './Components/manage-brands/manage-brands.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { NotificationsComponent } from './Components/notifications/notifications.component';
import { LoginComponent } from './Components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './Components/register/register.component';
import { AddProductFormComponent } from './Components/manage-products/add-product-form/add-product-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutComponent } from './Components/auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './Components/dashboard-layout/dashboard-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    WrapperComponent,
    HeaderComponent,
    ManageProductsComponent,
    ManageUsersComponent,
    ManageCategoriesComponent,
    ManageOrdersComponent,
    ManageBrandsComponent,
    SettingsComponent,
    NotFoundComponent,
    NotificationsComponent,
    LoginComponent,
    RegisterComponent,
    AddProductFormComponent,
    AuthLayoutComponent,
    DashboardLayoutComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
