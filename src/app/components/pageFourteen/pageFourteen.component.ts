import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-pageFourteen',
  templateUrl: './pageFourteen.component.html',
  styleUrls: ['./pageFourteen.component.scss']
})
export class PageFourteenComponent implements OnInit {
  contacts$ : any;
  users: any;
  userStatus:any;
  listData$:any;
  constructor(private contactsService : ContactsService) { }

  ngOnInit() {
    // Example 1
    this.users = ['ram','sita','geetha','peetha'];
    this.contacts$ = of(this.users);
    console.log(this.contacts$);


    // Example2
    new Observable(observer =>{
      setTimeout(()=>{
        observer.next('In Progress');
      },4000);

      setTimeout(()=>{
        observer.next('In Progress two');
      },8000);

      setTimeout(()=>{
        observer.next('In Progress three');
      },12000);

      setTimeout(()=>{
        observer.next('In Progress four');
      },15000);

      setTimeout(()=>{
        observer.next('In Progress five');
      },18000);

      setTimeout(()=>{
        observer.next('In Progress six');
      },21000);
    }).subscribe(data=>{
      this.userStatus = data;
    },error=>{
      console.log(error);
    });
  }

}
