import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-seven-server-element',
  templateUrl: './page-seven-server-element.component.html',
  styleUrls: ['./page-seven-server-element.component.css']
})
export class PageSevenServerElementComponent implements OnInit {
  @Input('srvElement') element : {type:string, name:string,content:string};
  constructor() { }

  ngOnInit(): void {
  }

}
