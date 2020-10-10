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
  otherOrg: any = [];

  constructor(
    private _http: HttpService,
    private router: Router,
    private local: LocalService
  ) {}

  ngOnInit(): void {
    this.local.currentMessage.subscribe((message) => (this.message = message));
    this._http.userId(this.message).subscribe((data) => {
      this.userid = data;
      this.local.changeId(this.userid.id);
      this._http.getOrganizationData(this.userid.id).subscribe((data) => {
        this.organizationData = data;
      });
    });
    this.AddUsers();  
  }

  ngDoCheck(): void {
    this.findUserID();
    this.passOtherOrgName();
  }

  AddUsers() {
    this._http.otherUserName().subscribe((data) => {
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
  }

  AddNewUser(OgId) {
    this._http.userOrgId(this.userIdAdd, OgId).subscribe((data) => {
      console.log('000===00', data);
    });
  }

  otherUser(){
    this._http.otherUserOrg(this.userid.id).subscribe((data) => {
      this.otherUserOrg = data;
    })
    // this.passOtherOrgName();
  }
passOtherOrgName(){
  var other = this.otherUserOrg;
  this.local.passOtherOrg(other)
}

}
