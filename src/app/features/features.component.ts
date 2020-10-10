import { collectExternalReferences } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
})
export class FeaturesComponent implements OnInit {
  constructor(private _http: HttpService, private router: Router, private local: LocalService) {}
  projectid: number = null;
  objData: any = [];
  ide: number = null;
  ngOnInit(): void {
    this.local.projectId .subscribe((id) => (this.projectid = id));
    this.local.currentid.subscribe((id) => (this.ide = id));
  }

  collectFeature(title, description, state) {
    this.objData = {
      title: title,
      description: description,
      state: state,
      posterID: this.ide,
      projectID: this.projectid,
    };
    this._http.addFeature(this.objData).subscribe((data) => {
      console.log(data);
    });
  }
}
