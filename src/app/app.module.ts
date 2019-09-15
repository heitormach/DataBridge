import { ComponentsModule } from './components/components.module';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule, TooltipModule } from 'ngx-bootstrap';
import { MatPaginatorIntl } from '@angular/material';
import { PaginatorSettings } from './core/settings/paginator-settings';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    LoginModule,
    HttpClientModule,
    ComponentsModule,
    ToastrModule.forRoot({ progressBar: true, closeButton: true }),
    ModalModule.forRoot(),
    TooltipModule.forRoot()
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: PaginatorSettings }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
