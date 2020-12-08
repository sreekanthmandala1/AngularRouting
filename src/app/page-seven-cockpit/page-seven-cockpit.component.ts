import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-seven-cockpit',
  templateUrl: './page-seven-cockpit.component.html',
  styleUrls: ['./page-seven-cockpit.component.css']
})
export class PageSevenCockpitComponent implements OnInit {

  serverName = "";
  blueprintName = "";
  serverElements: any;

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
  constructor() { }

  ngOnInit(): void {
  }

}
