import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  ROOT_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

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
}
