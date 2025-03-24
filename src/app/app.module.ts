import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { CounterComponent } from './components/counter/counter.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ToastrModule } from 'ngx-toastr';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { CompoComponent } from './compo/compo.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserFormComponent,
    UserDetailsComponent,
    CounterComponent,
    AddUserComponent,
    ConfirmDialogComponent,
    CompoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
