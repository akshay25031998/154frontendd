import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './entry/home/home.component';
import { HomeheaderComponent } from './templets/homeheader/homeheader.component';
import { AboutusComponent } from './templets/aboutus/aboutus.component';
import { LoginComponent } from './entry/login/login.component';
import{ReactiveFormsModule} from '@angular/forms';
import { EnquiryComponent } from './entry/enquiry/enquiry.component';
import { DashBoardComponent } from './entry/dash-board/dash-board.component';
import { ContactComponent } from './templets/contact/contact.component';
import { LocationComponent } from './templets/location/location.component';
import { DashheaderComponent } from './templets/dashheader/dashheader.component';
import { UsermenuComponent } from './templets/usermenu/usermenu.component';
import { ChkecibilComponent } from './templets/chkecibil/chkecibil.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeheaderComponent,
    AboutusComponent,
    LoginComponent,
    EnquiryComponent,
    DashBoardComponent,
    ContactComponent,
    LocationComponent,
    DashheaderComponent,
    UsermenuComponent,
    ChkecibilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
