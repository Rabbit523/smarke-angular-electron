import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import  {LoginUser } from '../model/LoginUser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API_URL = ' https://mock-api.smarkez.com/v1';

 



 

  constructor(private  httpClient:  HttpClient) { }
 
   getLogin(value){
    return this.httpClient.post(`${this.API_URL}/identity/users/login`,value)
  }
}
