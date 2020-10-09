import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css'],
})
export class OrganizationsComponent implements OnInit {
  organizationData: any = [];

  constructor(private _http: HttpService) {}

  ngOnInit(): void {
    this._http.getOrganizationData().subscribe((data) => {
      console.log('fokzeo', data);
      this.organizationData = data;
    });
  }
}
