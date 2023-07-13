import { Component, OnInit } from '@angular/core';
import { Userroles } from 'src/app/model/userroles';

@Component({
  selector: 'app-usermenu',
  templateUrl: './usermenu.component.html',
  styleUrls: ['./usermenu.component.css']
})
export class UsermenuComponent implements OnInit{
  userOption:Array<any>;
  userType:string;

  ngOnInit(): void {
   this.userOption=Userroles.userroles;
   this.userType=sessionStorage.getItem('userType');
  }

}
