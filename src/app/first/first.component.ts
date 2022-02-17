import { Observable } from 'rxjs';
import { MockService } from './../mock.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { of } from 'rxjs';
import { User } from '../user.model';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private readonly apiService: MockService) {}

  ngOnInit(): void {
    this.users$ = this.apiService.getUsers()
  }
}
