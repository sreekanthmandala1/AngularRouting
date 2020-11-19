import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.css']
})
export class PageThreeComponent implements OnInit {
  ServerName="";
  serverName="";
  onlyServer="Initial text";
  onlyName="";
  onEnterValue(event:Event){
    this.ServerName=(<HTMLInputElement>event.target).value;
  }
  onEnterClick(){
    this.ServerName="done";
  }
  onOnlyServer(){
    this.onlyName=this.onlyServer;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
