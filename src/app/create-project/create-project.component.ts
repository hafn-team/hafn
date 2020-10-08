import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
})
export class CreateProjectComponent implements OnInit {
  newOrgProjectName: String = '';
  newOrgProjectDescription: String = '';
  newProject: any = [];
  organizationData: any = [];
  ide: number;
  orgName: String = '';
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
  }
  postNewOrgProject() {
    this._http
      .postProject(
        this.newOrgProjectName,
        this.newOrgProjectDescription,
        this.ide,
        this.orgId
      )
      .subscribe((data) => {
        console.log('wonderful Angular', data);
        this.newProject = data;
      });
  }
}
