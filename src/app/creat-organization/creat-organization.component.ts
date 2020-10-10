import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-creat-organization',
  templateUrl: './creat-organization.component.html',
  styleUrls: ['./creat-organization.component.css'],
})
export class CreatOrganizationComponent implements OnInit {
  newOrgName: String = '';
  newOrgDescription: String = '';
  newOrganization: any = [];

  ide: number;
  constructor(private _http: HttpService, private data: LocalService) {}
  ngOnInit(): void {
    this.data.currentid.subscribe((id) => (this.ide = id));
  }
  postNewOrg() {
    this._http
      .postOrganization(this.newOrgName, this.newOrgDescription, this.ide)
      .subscribe((data) => {
        this.newOrganization = data;
      });
  }
}
