import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private _http: HttpService) {}

  posts: any;

  objData: any = [];
  ngOnInit(): void {
    this._http.getPosts().subscribe((data) => {
      this.posts = data;
      console.log(this.posts);
    });
  }

  collect(username, fullname, secretinfo, password) {
    this.objData = {
      username: username,
      fullname: fullname,
      secretinfo: secretinfo,
      password: password,
    };
    console.log(this.objData);
    this._http.saveToDb(this.objData).subscribe((data) => {
      console.log('succes');
    });
  }
}
