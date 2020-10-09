import { collectExternalReferences } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private _http: HttpService , private router: Router) {}
  objData: any = [];

  ngOnInit(): void {}

  collectlogin(username, password) {  
    console.log(username, password);
    this.objData = {
      username: username,
      password: password,
    };
    this._http.logUser(this.objData).subscribe((data) => {
      if(data){
        this.router.navigateByUrl('/home');
      }
      else{
        alert("somthing wrong")
      }
    });
  }
}
