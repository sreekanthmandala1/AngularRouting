import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-five',
  templateUrl: './page-five.component.html',
  styleUrls: ['./page-five.component.css']
})
export class PageFiveComponent implements OnInit {
  serverName="test server";
  serverCreated=false;
  serverCreationStatus="server was created";
  serverId= 10;
  serverIdd= 1;
  serverStatus= 'offline';
  servers=['Testserver','testserver2'];
    onCreateServer(){
      this.serverCreated= true;
      this.servers.push(this.serverName);
      this.serverCreationStatus= this.serverName;
    }
  constructor() {
    this.serverStatus = Math.random()>0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  ngOnInit(): void {
  }

}
