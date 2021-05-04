import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  API_URL = ' https://mock-api.smarkez.com/v1';
  
  constructor(private httpClient:HttpClient) { }


  register(value){
    return this.httpClient.post(`${this.API_URL}/identity/clients/register`,value)
  }
}
