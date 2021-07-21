import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {
  Server= "server is not created";
  serverCreation(){
    this.Server="Server was created";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
