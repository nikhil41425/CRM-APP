import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   BASE_URL="http://localhost:9017/user/";

  constructor(private httpClient:HttpClient) { }

   registerUser(user:any){
   return this.httpClient.post(`${this.BASE_URL}register`,user);
   }

   loginUser(user:any){

    return this.httpClient.post(`${this.BASE_URL}login`,user);

   }
    headers:any = new HttpHeaders(
      
    );



    changePassword(user:any){

    //this.headers.set('authorization',`bearer ${localStorage.getItem('token')}`);
         return this.httpClient.post(`${this.BASE_URL}changePassword`,user);
 
    }

   

  

    getToken(){
      return localStorage.getItem('token');
    }

    isLoggedIn(){
      if(localStorage.getItem('token') == null){
        return false;
      }
      else
      {
        return true;
      }
   }


}