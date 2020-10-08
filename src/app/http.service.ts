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
  ROOT_URL = 'http://localhost:3008';


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
  getPosts() {
    return this.http.get(this.ROOT_URL + '/getUser');
  }
  saveToDb(obj) {
    console.log('ee');
    return this.http.post(this.ROOT_URL + '/addUsers', obj);
  }
  logUser(obj) {
    console.log('fend', obj);
    return this.http.post(this.ROOT_URL + '/login', obj);

  }
  changePass(obj){
    return this.http.post(this.ROOT_URL + '/forgetPassword', obj)
  }
}
