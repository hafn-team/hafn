import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
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
  constructor(private _http: HttpService) {}

  ngOnInit(): void {
    this._http.getOrganizationData().subscribe((data) => {
      console.log('fokzeo', data);
      this.organizationData = data;
    });
  }
  postNewOrgProject() {
    this._http
      .postProject(this.newOrgProjectName, this.newOrgProjectDescription)
      .subscribe((data) => {
        console.log('wonderful Angular', data);
        this.newProject = data;
      });
  }
}
