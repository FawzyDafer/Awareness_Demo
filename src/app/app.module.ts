import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, ResetPasswordFormModule, CreateAccountFormModule, ChangePasswordFormModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { AppRoutingModule } from './app-routing.module';
import { DxCheckBoxModule, DxListModule, DxNumberBoxModule, DxPopupModule, DxScrollViewModule, DxSelectBoxModule, DxSortableModule, DxTemplateModule, DxTreeViewModule } from 'devextreme-angular';
import { HomeComponent } from './pages/home/home.component';
import { ServiceService } from './shared/services/service.service';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ProfileComponent } from './pages/profile/profile.component';
import { TreeviewModule } from 'ngx-treeview';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { TasksComponent } from './pages/tasks/tasks.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    ResetPasswordFormModule,
    CreateAccountFormModule,
    ChangePasswordFormModule,
    LoginFormModule,
    UnauthenticatedContentModule,
    AppRoutingModule,
    DxScrollViewModule,
    DxSortableModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxNumberBoxModule,
    NgxDropzoneModule,
    DxListModule,
    DxTreeViewModule,
    DxTemplateModule,
    DxPopupModule,
    BrowserAnimationsModule,
    MatStepperModule,FormsModule,ReactiveFormsModule,MatIconModule
  ],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService,
    ServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
