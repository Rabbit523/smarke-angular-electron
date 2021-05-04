import { Component, OnInit } from '@angular/core';
import  {LoginService}  from '../services/login.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router:Router, private loginService:LoginService) { }

  ngOnInit() {
    // this.usersLogin();

  }
  _form={
    email:'',
    password:''
  }

  onSubmit(form:NgForm){
    console.log(form.value);
    this.loginService.getLogin(form.value)
    .subscribe((data) => {
      console.log(data);
   });
   this.router.navigate(['./dashboard'])

  }

  // usersLogin(){
  //   this.loginService.getLogin()
  // }

}
