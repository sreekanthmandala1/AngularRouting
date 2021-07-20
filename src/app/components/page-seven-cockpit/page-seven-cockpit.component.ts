import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-page-seven-cockpit',
  templateUrl: './page-seven-cockpit.component.html',
  styleUrls: ['./page-seven-cockpit.component.css']
})
export class PageSevenCockpitComponent implements OnInit {

  serverName = "";
  blueprintName = "";
  newServerName: '';
  newServerContent: '';
  @Output() serverCreated= new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();



  onAddServerPop(){
     this.serverCreated.emit({serverName:this.newServerName,
    serverContent:this.newServerContent});
  }
  onAddBlueprintPop(){
    this.blueprintCreated.emit({serverName:this.newServerName,
      serverContent:this.newServerContent});
  }
  constructor() { }

  ngOnInit(): void {
  }

}
