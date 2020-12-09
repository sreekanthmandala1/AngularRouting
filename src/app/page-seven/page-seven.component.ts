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

  serverElements=[{type:'server', name:'testServer', content:'just a test!'}];

  onAddServer() {
    this.servers.push(this.addServer);
  }
  onAddBlueprintServer(){
    this.bpServer.push(this.blueprintServer);
  }

  onServerAdded(serverData:{serverName:string,serverContent:string}){
    this.serverElements.push({
      type:'server',
     name:serverData.serverName,
   content:serverData.serverContent
    });
 }
 onBlueprintAdded(blueprintData:{serverName:string,serverContent:string}){
    this.serverElements.push({
      type:'blueprint',
      name:blueprintData.serverName,
      content:blueprintData.serverContent
   });
 }

  constructor() {}

  ngOnInit(): void {}
}
