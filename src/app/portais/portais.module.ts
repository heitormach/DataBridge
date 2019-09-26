import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { FormDefaultModule } from '../form-default/form-default.module';
import { PortaisHtmlComponent } from './portais-html/portais-html.component';
import { PortaisFormComponent } from './portais-form/portais-form.component';

@NgModule({
  declarations: [PortaisHtmlComponent, PortaisFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FormDefaultModule
  ],
  exports: [
    PortaisHtmlComponent,
    PortaisFormComponent
  ]
})
export class PortaisModule { }
