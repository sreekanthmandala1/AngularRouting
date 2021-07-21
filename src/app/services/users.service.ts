import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers():Observable<User> {
    const headers2 = new HttpHeaders({
      'content-type': 'application/json',
      authenticationToken: '12344454',
    });

    const params2 = new HttpParams()
      .set('pageSize', '10')
      .set('pageOptions', '100');

    return this.http.get<User>('https://jsonplaceholder.typicode.com/users', {
      headers: headers2, params:params2
    });
    // const users = [
    //   {
    //     name:'sreekanth',
    //     gender : 'male'
    //   },
    //   {
    //     name:'kiran',
    //     gender : 'male'
    //   }
    // ];
    // return users;
  }
}
