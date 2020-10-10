import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { LocalService } from '../local.service';
import { Router } from '@angular/router';

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
  ide: number = null;

  orgName: String = '';
  orgId: number = null;

  constructor(private _http: HttpService, private data: LocalService , private router: Router) {}

  ngOnInit(): void {
    this.data.currentid.subscribe((id) => (this.ide = id));
    console.log('username', this.ide);
    this._http.getOrganizationData(this.ide).subscribe((data: any) => {
      this.organizationData = data;
    });
  }

 ngDoCheck(): void {
    this.wetever();
  }


  wetever() {
    for (var i = 0; i < this.organizationData.length; i++) {
      if (this.orgName === this.organizationData[i].name) {
        this.orgId = this.organizationData[i].id;
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
        alert("added seccuesfully")
        this.newProject = data;
      });
  }

}
