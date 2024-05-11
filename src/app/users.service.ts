import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private activeUsers = ['Max', 'Anna'];
  private inactiveUsers = ['Chris', 'Manu'];

  constructor() {}

  getActiveUsers() {
    return this.activeUsers.slice();
  }

  getInactiveUsers() {
    return this.inactiveUsers.slice();
  }

  setUserToInactive(id: number) {
    const user = this.activeUsers[id];
    if (user) {
      this.inactiveUsers.push(user);
      this.activeUsers.splice(id, 1);
    }
  }

  setUserToActive(id: number) {
    const user = this.inactiveUsers[id];
    if (user) {
      this.activeUsers.push(user);
      this.inactiveUsers.splice(id, 1);
    }
  }
}
