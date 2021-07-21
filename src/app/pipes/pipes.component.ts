import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  sample = "Hello, @user, welcome!";
  constructor() { }

  ngOnInit(): void {
  }
 
  }
