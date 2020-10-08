import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();
  private useridid = new BehaviorSubject(0);
  currentid = this.useridid.asObservable();

  constructor() {}

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  changeId(id: number) {
    this.useridid.next(id);
  }
}
