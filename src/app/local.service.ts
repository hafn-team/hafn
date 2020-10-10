import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LocalService {
  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();
  private useridid = new BehaviorSubject(null);
  currentid = this.useridid.asObservable();
  private projectidid = new BehaviorSubject(null)
  projectId = this.projectidid.asObservable();
  private otherOrgName = new BehaviorSubject([]);
  otherOrg = this.otherOrgName.asObservable();
  // private userparam = new BehaviorSubject({});
  // usernameid = this.userparam.asObservable();
  constructor() {}
  changeMessage(message: string) {
    this.messageSource.next(message);
  }
  changeId(id: number) {
    this.useridid.next(id);
  }
  changeProjectId(projectid: number) {
    this.projectidid.next(projectid);
  }
  passOtherOrg(orgName: any){
    this.otherOrgName.next(orgName)
  }
  // getUsernameid(user){
  //   this.userparam.next(user);
  // }
}