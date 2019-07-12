import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = "http://localhost/ucus/giris.php"
  constructor(private http: HttpClient) { }
  tryLogin(username: any, password: any){
    const loginDto = {
      'username' : username,
      'pass' : password
    }
    console.log(loginDto)
    return this.http.post(this.url, loginDto)
  }
}
