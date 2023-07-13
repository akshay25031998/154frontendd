import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './entry/home/home.component';
import { AboutusComponent } from './templets/aboutus/aboutus.component';
import { LoginComponent } from './entry/login/login.component';
import { LocationComponent } from './templets/location/location.component';
import { ContactComponent } from './templets/contact/contact.component';
import { EnquiryComponent } from './entry/enquiry/enquiry.component';
import { HomeheaderComponent } from './templets/homeheader/homeheader.component';
import { DashBoardComponent } from './entry/dash-board/dash-board.component';
import { ChkecibilComponent } from './templets/chkecibil/chkecibil.component';
const routes: Routes = [
  {
     path:'',component:HomeComponent,children:[
      {path:'',component:HomeheaderComponent,children:[
        {path:'about',component:AboutusComponent},
        {path:'login',component:LoginComponent},
        {path:'Location',component:LocationComponent},
        {path:'contact',component:ContactComponent},
        {path:'enquiry',component:EnquiryComponent}
      ]},
      {path:'dashboard',component:DashBoardComponent},
      
    ],

  }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
