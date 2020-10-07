import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IUser {
  id: number;
  fullName: string;
  username: string;
  secretinfo: string;
  password: string;
  created_at: string;
}
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  // pathBase = 'http://localhost:3008';
  pathBaseOrganization = 'http://localhost:3008/organization/1';
  pathBaseOrgProject = 'http://localhost:3008/getOrgProject/2';
  pathBaseCreateOrganization = 'http://localhost:3008/organization/1';
  constructor(private http: HttpClient) {}

  // haveData(): Observable<IUser[]> {
  //   return this.http.get<IUser[]>(`${this.pathBase}/user`);
  // }

  getOrganizationData() {
    // console.log('fij', this.http.get(this.pathBaseOrganization));
    return this.http.get(this.pathBaseOrganization);
  }

  getOrgProjectData() {
    return this.http.get(this.pathBaseOrgProject);
  }

  postOrganization(name, description) {
    return this.http.post(this.pathBaseOrganization, {
      name: name,
      description: description,
      userID: 1,
    });
  }
}
