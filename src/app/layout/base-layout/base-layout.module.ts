import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseLayoutRoutes } from './base-layout.routing';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { LoginModule } from 'src/app/login/login.module';
import { PortaisModule } from 'src/app/portais/portais.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(BaseLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    LoginModule,
    PortaisModule
  ]
})
export class BaseLayoutModule { }
