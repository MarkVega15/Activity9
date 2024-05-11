import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeUsers: string[];
  inactiveUsers: string[];
  activeToInactiveCount: number;
  inactiveToActiveCount: number;

  constructor(private usersService: UsersService, private counterService: CounterService) {}

  ngOnInit() {
    this.activeUsers = this.usersService.getActiveUsers();
    this.inactiveUsers = this.usersService.getInactiveUsers();
    this.activeToInactiveCount = this.counterService.activeToInactiveCounter;
    this.inactiveToActiveCount = this.counterService.inactiveToActiveCounter;
  }

  onSetToInactive(id: number) {
    this.usersService.setUserToInactive(id);
    this.counterService.incrementActiveToInactive();
    this.activeUsers = this.usersService.getActiveUsers();
    this.inactiveUsers = this.usersService.getInactiveUsers();
    this.activeToInactiveCount = this.counterService.activeToInactiveCounter; 
  }

  onSetToActive(id: number) {
    this.usersService.setUserToActive(id);
    this.counterService.incrementInactiveToActive();
    this.activeUsers = this.usersService.getActiveUsers();
    this.inactiveUsers = this.usersService.getInactiveUsers();
    this.inactiveToActiveCount = this.counterService.inactiveToActiveCounter;
  }
}