import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
