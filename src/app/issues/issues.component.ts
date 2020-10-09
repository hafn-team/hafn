import { collectExternalReferences } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css'],
})
export class IssuesComponent implements OnInit {
  constructor(private _http: HttpService, private router: Router) {}

  objData: any = [];

  ngOnInit(): void {}
  collectIssue(title, description, state) {
    this.objData = {
      title: title,
      description: description,
      state: state,
      posterID: 1,
      projectID: 1,
    };
    this._http.addIssue(this.objData).subscribe((data) => {
      console.log(data);
    });
  }
}
