import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {RegisterService } from '../services/register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService:RegisterService) { }

  ngOnInit() {
  }


  _form ={
    username:'',
    email:'',
    password:'',

  }
  onSubmit(form:NgForm){
   console.log(form.value) ;

   this.registerService.register(form.value).subscribe((data)=>{
     console.log(data)
   })
  }



}
