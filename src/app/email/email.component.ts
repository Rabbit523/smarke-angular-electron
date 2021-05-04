import { Component, OnInit } from '@angular/core';
import  {EmailService} from '../services/email.service';
import {NgForm} from '@angular/forms';
import {Router } from  '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor(   private router:Router,private emailService:EmailService) { }

  ngOnInit() {
    this.email();

  }

  _form={
    email:''
  }
email(){
  
}

onSubmit(form:NgForm){
  console.log(form.value);
  this.emailService.forgotPassword(form.value).subscribe((data)=>console.log(data))
  // this.router.navigate(['login']);
}

}
