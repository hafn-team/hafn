import { collectExternalReferences } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private router: Router,
    private local: LocalService
  ) {}
  objData: any = [];
  message: string;

  ngOnInit(): void {
    this.local.currentMessage.subscribe((message) => (this.message = message));
  }

  collectlogin(username, password) {  
    console.log(username, password);
    this.objData = {
      username: username,
      password: password,
    };
    this._http.logUser(this.objData).subscribe((data) => {
      if (data) {
        this.router.navigateByUrl('/home');
      } else {
        alert('somthing wrong');
      }
    });
  }
  newMessage() {
    this.local.changeMessage(this.objData.username);
  }
}
