import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projectData: any = [];
  constructor(private _http: HttpService) {}

  ngOnInit(): void {
    this._http.getOrgProjectData().subscribe((data) => {
      console.log('====>', data);
      this.projectData = data;
    });
  }
}
