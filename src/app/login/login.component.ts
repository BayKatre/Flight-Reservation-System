import { Component, OnInit } from '@angular/core'
import { LoginService } from '../login.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private loginStatus: Number
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  tryLogin(loginData){
    console.log(loginData)
    this.loginService.tryLogin(loginData.username, loginData.pass)
      .subscribe(response => {
        if(response){
          console.log(response)
          this.loginStatus = 1
          setTimeout(() => {
            this.router.navigate(['homepage'])
          }, 2000);
        }
        else {
          console.log("Giriş Başarısız")
        }
      }, error => {
        if(error){
          this.loginStatus = 2
          console.log(error.error)
          setTimeout(() => {
            this.loginStatus = 0
          }, 2000);
        }
      }
      )
  }

}
