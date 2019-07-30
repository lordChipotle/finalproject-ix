import { Injectable } from '@angular/core';
import { User } from '../user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Array<User>;

  constructor() {
    this.users = [
      {
        name: 'Byron',
        lastName: 'de Villiers',
        email: 'byron@mail.com',
        cellPhone: 828073593
      }
    ];
  }

  getUsers(): Array<User> {
    return this.users;
  }
}