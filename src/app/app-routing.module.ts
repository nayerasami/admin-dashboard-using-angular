import { WrapperComponent } from './Components/wrapper/wrapper.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageBrandsComponent } from './Components/manage-brands/manage-brands.component';
import { ManageOrdersComponent } from './Components/manage-orders/manage-orders.component';
import { ManageProductsComponent } from './Components/manage-products/manage-products.component';
import { ManageCategoriesComponent } from './Components/manage-categories/manage-categories.component';
import { ManageUsersComponent } from './Components/manage-users/manage-users.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { NotificationsComponent } from './Components/notifications/notifications.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { AuthLayoutComponent } from './Components/auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './Components/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
  {
    path: '', component: DashboardLayoutComponent, children: [
      { path: '', component: WrapperComponent },
      { path: 'brands', component: ManageBrandsComponent },
      { path: 'orders', component: ManageOrdersComponent },
      { path: 'products', component: ManageProductsComponent },
      { path: 'categories', component: ManageCategoriesComponent },
      { path: 'users', component: ManageUsersComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'settings', component: SettingsComponent },
    ]
  },
  {
    path: '', component: AuthLayoutComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
