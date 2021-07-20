import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {
  oddNumbers=[1,3,5];
  evenNumbers=[2,4,6,8];
  onlyOdd=false;

  allowUnordered = false;
  constructor() {
    setTimeout(()=>{
      this.allowUnordered = true;
    },2000);
  }

  ngOnInit(): void {
  }

}
