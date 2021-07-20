import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-nine',
  templateUrl: './page-nine.component.html',
  styleUrls: ['./page-nine.component.css']
})
export class PageNineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  mainfunc: boolean = true;
  subfunc: boolean = false;
  namesmine: string[]= [];
  a = "array pushed"
 
 hedid() {
    this.mainfunc = false;
    console.log(this.mainfunc)   
    this.namesmine.push(this.a)
    for (let i = 0; i <= this.namesmine.length; i++) {
      const element = this.namesmine[i];
      console.log(element)
      
    }
  }

}
