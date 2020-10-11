import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { HttpService } from '../http.service';
import { LocalService } from '../local.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  massages: any = [];
  numbres: any = [];
  userid: any;
  message: string;
  msg: string = '';
  constructor(
    private _http: HttpService,
    private router: Router,
    private local: LocalService
  ) {}
 
  ngOnInit(): void {
    this.getMessages();
    this.local.currentMessage.subscribe((message) => (this.message = message));
    console.log('username', this.message);
    this._http.userId(this.message).subscribe((data) => {
      this.userid = data;
      this.local.changeId(this.userid.id);
      console.log('userid', this.userid);
    });
  }
  postMessage() {
    this._http
      .postMsg(this.userid.id, this.msg, this.message)
      .subscribe((data) => {
        console.log('fokzeo', data);
        this.numbres = data;
      });
     this.getMessages();
  }
  getMessages() {
    this._http.allMsg().subscribe((data) => {
      console.log('messages====>', data);
      this.massages = data;
    });
  }

  async postReceveMsg() {
    this.postMessage()
    await   this.getMessages()
    await   this.getMessages()
    }
}
