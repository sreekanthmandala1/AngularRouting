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
  onAddServer() {
    this.servers.push(this.addServer);
  }
  onAddBlueprintServer(){
    this.bpServer.push(this.blueprintServer);
  }
  constructor() {}

  ngOnInit(): void {}
}
