import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-page-thirteen',
  templateUrl: './page-thirteen.component.html',
  styleUrls: ['./page-thirteen.component.css'],
})
export class PageThirteenComponent implements OnInit {
  people:any;
  constructor(private usersService : UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(data=>{
      console.log(data);
      this.people=data;
    },
    (err)=>{
      console.log("unable to get data from URL"+ err);
    })
    
    // this.users = this.usersService.getUsers();
    // const users = this.usersService.getUsers();
    // console.log(users)
  }

}
