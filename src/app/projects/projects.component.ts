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
    console.log('username', this.ide);
    this.local.otherOrg.subscribe((org) => this.otherOrg = org )
    console.log('>/>/<',this.otherOrg)
    this._http.getOrganizationData(this.ide).subscribe((data: any) => {
      console.log('fokzeo', data.length);
      this.organizationData = data;
    });
  }

  getOrgId() {
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
  getOtherOrgId(){
    for(var i = 0; i < this.otherOrg.length; i++){
      if(this.otherOrgName === this.otherOrg[i].name){
        this.otherOrgid = this.otherOrg[i].id;
        console.log('11111',this.otherOrgid)
      }
      }
      this._http.getOrgProjectData(this.otherOrgid).subscribe((dataa: any) =>{
        console.log('<====',dataa);
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
   console.log('=====>>>',projectName,this.projectid)
 }



}
