import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-seven',
  templateUrl: './page-seven.component.html',
  styleUrls: ['./page-seven.component.css'],
})
export class PageSevenComponent implements OnInit {
  addServer = '';
  servers = [];
  blueprintServer = "";
  bpServer=[];

  //column 2
  serverName = "";
  blueprintName = "";
  serverElements=[];

  onAddServer() {
    this.servers.push(this.addServer);
  }
  onAddBlueprintServer(){
    this.bpServer.push(this.blueprintServer);
  }

  onAddServerPop(){
    this.serverElements.push({
      type:'server',
      name:this.serverName,
      content:this.blueprintName
    });
  }
  onAddBlueprintPop(){
    this.serverElements.push({
      type:'blueprint',
      name:this.serverName,
      content:this.blueprintName
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
