import { Component, OnInit } from '@angular/core';
import { HttpService, IUser } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: any;

  constructor(private _http: HttpService) {
    // this.data = [];
  }

  ngOnInit(): void {
    // this._http.haveData().subscribe((data) => {
    //   this.data = data;
    // });
  }
}
