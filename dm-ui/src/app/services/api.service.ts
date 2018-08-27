import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


const BASE_URL = environment.baseurl;
const LOGIN_URL = environment.loginurl;
const TEST_URL = environment.testurl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}
 
  getTestData() {
    return this.http.get(BASE_URL+TEST_URL);
    }

    login() {
      return this.http.get(BASE_URL+LOGIN_URL);
      }

  }
