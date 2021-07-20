import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-page-thirteen',
  templateUrl: './page-thirteen.component.html',
  styleUrls: ['./page-thirteen.component.css'],
})
export class PageThirteenComponent implements OnInit {
  users:any;
  constructor(private usersService : UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(data=>{
      this.users=data;
    })
    
    // this.users = this.usersService.getUsers();
    // const users = this.usersService.getUsers();
    // console.log(users)
  }

}
