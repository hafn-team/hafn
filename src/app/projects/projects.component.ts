import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

import { LocalService } from '../local.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projectData: any = [];

  ide: number;
  organizationData: any = [];
  orgName: string = '';
  orgId: number;
  constructor(private _http: HttpService, private data: LocalService) {}

  ngOnInit(): void {
    this.data.currentid.subscribe((id) => (this.ide = id));
    console.log('username', this.ide);
    this._http.getOrganizationData(this.ide).subscribe((data: any) => {
      console.log('fokzeo', data.length);

      this.organizationData = data;
    });
  }
  wetever() {
    for (var i = 0; i < this.organizationData.length; i++) {
      if (this.orgName === this.organizationData[i].name) {
        this.orgId = this.organizationData[i].id;
        console.log('51513', this.orgId);
      }
    }
    this._http.getOrgProjectData(this.orgId).subscribe((data) => {
      console.log('====>', data);
      this.projectData = data;
    });
  }
}
