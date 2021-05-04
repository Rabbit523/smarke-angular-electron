import { Injectable } from '@angular/core';
import {HttpClient } from  '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmailService {


  API_URL = ' https://mock-api.smarkez.com/v1/';
  constructor( private httpClient:HttpClient) {


   }
   forgotPassword(value){
  return this.httpClient.post(`${this.API_URL}/identity/users/forgot`,value)
  }
}
