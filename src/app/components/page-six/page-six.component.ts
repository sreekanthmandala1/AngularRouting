import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-six',
  templateUrl: './page-six.component.html',
  styleUrls: ['./page-six.component.css']
})
export class PageSixComponent implements OnInit {
  showSecret = false;
  log=[];

  onIncrement(){
    this.log.push(this.log.length+1)
;  }
  constructor() { }

  ngOnInit(): void {
  }

}
