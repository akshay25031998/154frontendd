import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashheader',
  templateUrl: './dashheader.component.html',
  styleUrls: ['./dashheader.component.css']
})
export class DashheaderComponent implements OnInit {
  userRole : String;
  
  ngOnInit(): void {
   let ut:string=sessionStorage.getItem('userType') 
   if(ut=='re')
   {
    this.userRole="Relationship Executive";
   }
   else if(ut=='oe')
   {
    this.userRole="Opertaional Executive"
   }
   
  }
 
}
