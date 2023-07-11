import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CreaterecruiterComponent } from './createrecruiter/createrecruiter.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecruiterListComponent } from './recruiter-list/recruiter-list.component';
import { UpdaterecruiterComponent } from './updaterecruiter/updaterecruiter.component';
import { FormsModule } from '@angular/forms';
import { RecruiterDetailsComponent } from './components/recruiter-details/recruiter-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CreaterecruiterComponent,
    NavbarComponent,
    RecruiterListComponent,
    UpdaterecruiterComponent,
    RecruiterDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
