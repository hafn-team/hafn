import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private _http: HttpService, private router: Router) {}

  posts: any;

  objData: any = [];
  ngOnInit(): void {
    this._http.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  collect(username, fullname, secretinfo, password, reppassword) {
    if (reppassword !== password) {
      alert('the password must be the same ');
      return;
    } else {
      this.objData = {
        username: username,
        fullname: fullname,
        secretinfo: secretinfo,
        password: password,
      };
      console.log(this.objData);
      this._http.saveToDb(this.objData).subscribe((data) => {
        this.router.navigateByUrl('/login');
      });
    }
  }
}
