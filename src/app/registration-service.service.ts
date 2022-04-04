import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {

  constructor(private http: HttpClient) { }

  signup(data:any){
   return this.http.post("http://localhost:3000/users/signup",{
      email:data.email,
      name:data.name,
      password:data.password
    })

  }
}
