import { Injectable } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Observable, Observer, Subscription } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = "http://localhost:8095"
  data: any;

  constructor(private http: HttpClient) {
  }

  getUser(userName: string): Observable<any> {
    //console.log(this.http.get(`${this.baseUrl}/user/${userName}`));
    return this.http.get(`${this.baseUrl}/user/${userName}`)
  }


}