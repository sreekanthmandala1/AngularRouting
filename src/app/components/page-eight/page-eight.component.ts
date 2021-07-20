import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-eight',
  templateUrl: './page-eight.component.html',
  styleUrls: ['./page-eight.component.css']
})
export class PageEightComponent implements OnInit {
  serverElements=[{type:'blueprint',name:'test server', content:'just a test'}];

  onServerAdded(serverData:{serverName:string,serverContent:string}){
    this.serverElements.push({
      type:'server',
    name:serverData.serverName,
    content:serverData.serverContent
    });
  }
  onBlueprintAdded(serverData:{serverName:string,serverContent:string}){
    this.serverElements.push({
      type:'blueprint',
    name:serverData.serverName,
    content:serverData.serverContent
    });
  }
  constructor() { }

  ngOnInit(): void {
  }

}
