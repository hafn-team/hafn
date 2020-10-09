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
  pathBaseOrgProject = 'http://localhost:3008/getOrgProject/3';
  constructor(private http: HttpClient) {}

  // haveData(): Observable<IUser[]> {
  //   return this.http.get<IUser[]>(`${this.pathBase}/user`);
  // }
  ROOT_URL = 'http://localhost:3008';

  getOrganizationData(user_id) {
    // console.log('fij', this.http.get(this.pathBaseOrganization));
    return this.http.get(this.ROOT_URL + `/organization/${user_id}`);
  }

  getOrgProjectData(id) {
    return this.http.get(this.ROOT_URL + `/getOrgProject/${id}`);
  }

  postOrganization(name, description, id) {
    return this.http.post(this.pathBaseOrganization, {
      name: name,
      description: description,
      userID: id,
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

  userId(name) {
    console.log('name===>', name);
    var halim = this.http.get(this.ROOT_URL + `/user/${"'" + name + "'"}`);
    return halim;
  }

  postProject(name, description, userId, orgId) {
    return this.http.post(this.pathBaseOrgProject, {
      name: name,
      description: description,
      organizationID: orgId,
      userID: userId,
    });
  }
  changePass(obj) {
    return this.http.post(this.ROOT_URL + '/forgetPassword', obj);
  }

  //get All userName
  otherUserName() {
    return this.http.get(this.ROOT_URL + '/user');
  }

  ///post user org id and
  userOrgId(userId, orgId) {
    return this.http.post(this.ROOT_URL + '/userOrgId/', {
      userID: userId,
      orgID: orgId,
    });
  }

//get organizations where other users add this user
otherUserOrg(userid){
  return this.http.get(this.ROOT_URL + `/orgotherusers/${userid}`);
}

}
