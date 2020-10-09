import { collectExternalReferences } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
})
export class FeaturesComponent implements OnInit {
  constructor(private _http: HttpService, private router: Router) {}

  objData: any = [];

  ngOnInit(): void {}

  collectFeature(title, description, state) {
    this.objData = {
      title: title,
      description: description,
      state: state,
      posterID: 1,
      projectID: 1,
    };
    this._http.addFeature(this.objData).subscribe((data) => {
      console.log(data);
    });
  }
}
