import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor(private http: HttpClient) { }

  getUsers():Observable<User[]>{
     return  this.http.get<User[]>('https://gorest.co.in/public/v1/users')
     .pipe(map(result => result['data']));
  }
}

