import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { LocalService } from '../local.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css'],
})
export class OrganizationsComponent implements OnInit {
  organizationData: any = [];
  otherUserOrg: any = [];
  message: string;
  userid: any;
  userIdAdd: number = null;
  userName: string = '';
  usernames: any = [];
  // num: number = 4;

  constructor(
    private _http: HttpService,
    private router: Router,
    private data: LocalService
  ) {}

  ngOnInit(): void {
    this.data.currentMessage.subscribe((message) => (this.message = message));
    console.log('username', this.message);
    this._http.userId(this.message).subscribe((data) => {
      this.userid = data;
      this.data.changeId(this.userid.id);
      console.log('userid', this.userid);
      this._http.getOrganizationData(this.userid.id).subscribe((data) => {
        console.log('fokzeo', data);
        this.organizationData = data;
      });
    });
    this.wiiiwo();
  }

  ngDoCheck(): void {
    this.findUserID();
  }

  wiiiwo() {
    this._http.otherUserName().subscribe((data) => {
      console.log('userNameId', data);
      this.usernames = data;
      this.usernames = this.usernames.filter(user => user.id !== this.userid.id);
    });
  }

  findUserID() {
    for (let i = 0; i < this.usernames.length; i++) {
      if (this.usernames[i].username === this.userName) {
        this.userIdAdd = this.usernames[i].id;
      }
    }
    console.log('kgpre', this.userIdAdd);
  }

  AddNewUser(OgId) {
    this._http.userOrgId(this.userIdAdd, OgId).subscribe((data) => {
      console.log('000===00', data);
    });
  }

  otherUser(){
    this._http.otherUserOrg(this.userid.id).subscribe((data) => {
      console.log('000===004555', data);
      this.otherUserOrg = data;
    })
  }

}
