import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagetwelve',
  templateUrl: './pagetwelve.component.html',
  styleUrls: ['./pagetwelve.component.css']
})
export class PagetwelveComponent implements OnInit {

  imagewidth:number = 50;
  imageheight:number = 50;
  borderrad:number = 50;

  constructor() { }

  ngOnInit(): void {
  }

students:any[]= [

{
  "studentname" : "Bhargavi",
  "imagepath" : "https://www.svgrepo.com/show/190738/learning-student.svg",
  "studentid" : 123456789,
  "result" : "pass"
},
{
  "studentname" : "Madhuri",
  "imagepath" : "https://www.svgrepo.com/show/190738/learning-student.svg",
  "studentid" : 123456788,
  "result" : "pass"

},
{
  "studentname" : "Halwa",
  "imagepath" : "https://www.svgrepo.com/show/190738/learning-student.svg",
  "studentid" : 123456787,
  "result" : "pass"

},
{
  "studentname" : "Chethana",
  "imagepath" : "https://www.svgrepo.com/show/190738/learning-student.svg",
  "studentid" : 123456786,
  "result" : "pass"
},
{
  "studentname" : "Likitha",
  "imagepath" : "https://www.svgrepo.com/show/190738/learning-student.svg",
  "studentid" : 123456785,
  "result" : "pass"
},
{
  "studentname" : "Chikitha",
  "imagepath" : "https://www.svgrepo.com/show/190738/learning-student.svg",
  "studentid" : 123456784,
  "result" : "pass"
},
{
  "studentname" : "Thakita",
  "imagepath" : "https://www.svgrepo.com/show/190738/learning-student.svg",
  "studentid" : 123456783,
  "result" : "pass"
}

]





}
