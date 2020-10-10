import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { LocalService } from '../local.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projectData: any = [];
  projectid: number = 0;
  ide: number = null;
  organizationData: any = [];
  orgName: string = '';
  orgId: number = null;
  otherOrg: any = [];
  otherProjectData: any = [];
  otherOrgName: string = '';
  otherOrgid: number = null;
  constructor(private _http: HttpService, private local: LocalService,   private router: Router,) {}

  ngOnInit(): void {
    this.local.currentid.subscribe((id) => (this.ide = id));
    this.local.otherOrg.subscribe((org) => this.otherOrg = org )
    this._http.getOrganizationData(this.ide).subscribe((data: any) => {
      this.organizationData = data;
    });
  }

  getOrgId() {
    for (var i = 0; i < this.organizationData.length; i++) {
      if (this.orgName === this.organizationData[i].name) {
        this.orgId = this.organizationData[i].id;
      }
    }
    this._http.getOrgProjectData(this.orgId).subscribe((data) => {
      console.log('====>', data);
      this.projectData = data;
    });
  }
  getOtherOrgId(){
    for(var i = 0; i < this.otherOrg.length; i++){
      if(this.otherOrgName === this.otherOrg[i].name){
        this.otherOrgid = this.otherOrg[i].id;
      }
      }
      this._http.getOrgProjectData(this.otherOrgid).subscribe((dataa: any) =>{
        this.otherProjectData = dataa;
      });
    }

featuresFunc(){
  this.router.navigateByUrl('/features');
}   

issuesFunc(){
  this.router.navigateByUrl('/issues');
}

issFeatFunc(){
    this.router.navigateByUrl('/issFeat');
      }

 newProjectId(projectName){
   for(var i = 0; i < this.projectData.length; i++){
     if (this.projectData[i].name === projectName){
       this.local.changeProjectId(this.projectData[i].id)
     }
   }
 }



}
