import { Injectable } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  HttpClient: any;
  baseUrl = "http://localhost:8095"
  data: any;

  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get(this.baseUrl+"/user").subscribe(data=>{
      console.log(data)
      });
  }

}