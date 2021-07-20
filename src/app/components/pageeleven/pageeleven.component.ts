import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pageeleven',
  templateUrl: './pageeleven.component.html',
  styleUrls: ['./pageeleven.component.css']
})
export class PageelevenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showimg:boolean = false;
  imgpath = "https://st2.depositphotos.com/1431107/9973/v/950/depositphotos_99733838-stock-illustration-student-vector-icon.jpg"

  toggleimages(){
    this.showimg = !this.showimg
  }


}
