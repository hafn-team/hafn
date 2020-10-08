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
  message: string;
  userid: any;
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
      // this.num = this.userid.id;
      this._http.getOrganizationData(this.userid.id).subscribe((data) => {
        console.log('fokzeo', data);
        this.organizationData = data;
      });
    });
  }
}
