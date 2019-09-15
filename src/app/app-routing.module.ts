import { LoginFormComponent } from './login/login-form/login-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  {
    path: '',
    component: BaseLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layout/base-layout/base-layout.module#BaseLayoutModule'
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule,
    BrowserModule,
  RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
