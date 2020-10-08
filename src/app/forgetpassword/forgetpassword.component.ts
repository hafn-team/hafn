import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css'],
})
export class ForgetpasswordComponent implements OnInit {
  constructor(private _http: HttpService, private router: Router) {}

  objData: any = [];

  ngOnInit(): void {}
  collectRecovery(username, newPassword, secretinfo) {
    this.objData = {
      username: username,
      newPassword: newPassword,
      secretinfo: secretinfo,
    };
    this._http.changePass(this.objData).subscribe((data) => {
      if (data) {
        this.router.navigateByUrl('/');
      } else {
        alert('something wrong');
      }
    });
  }
}
