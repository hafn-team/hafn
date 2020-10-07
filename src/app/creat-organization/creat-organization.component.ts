import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-creat-organization',
  templateUrl: './creat-organization.component.html',
  styleUrls: ['./creat-organization.component.css'],
})
export class CreatOrganizationComponent implements OnInit {
  newOrgName: String = '';
  newOrgDescription: String = '';
  newOrganization: any = [];

  constructor(private _http: HttpService) {}

  ngOnInit(): void {}
  postNewOrg() {
    this._http
      .postOrganization(this.newOrgName, this.newOrgDescription)
      .subscribe((data) => {
        console.log('fokzeo', data);
        this.newOrganization = data;
      });
  }
}
