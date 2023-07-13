import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb:FormBuilder, private router: Router)
  {
    
  }
  loginForm:FormGroup;
  ngOnInit(): void {
    this.loginForm=this.fb.group(
      {
        username:[],
        password:[]
      }
    )
  }
  onLogin()
  {
  if(this.loginForm.controls['username'].value=='re'
  &&this.loginForm.controls['password'].value=='re')
  
  {
    console.log(this.loginForm.value)
    sessionStorage.setItem('userType','re')
    this.router.navigateByUrl('/dashboard')
  }
  else if(this.loginForm.controls['username'].value=='oe'
  &&this.loginForm.controls['password'].value=='oe')

  {
    console.log(this.loginForm.value)
    sessionStorage.setItem('userType','oe')
    this.router.navigateByUrl('/dashboard')
  }

  else{
    alert("enter valid usrename password..!!")
  }

  }
}
