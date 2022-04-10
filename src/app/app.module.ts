import { BlueButtonComponent } from './blue-button/blue-button.component';
import { ButtonComponent } from './button/button.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PermissionComponent } from './permission/permission.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { ViewPopupComponent } from './view-popup/view-popup.component';
import { DeletePopupComponent } from './delete-popup/delete-popup.component'

@NgModule({
  declarations: [
    AppComponent,
    PermissionComponent,
    ViewPopupComponent,
    BlueButtonComponent,
    ButtonComponent,
    DeletePopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
