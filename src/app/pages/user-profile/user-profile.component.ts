import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/users.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  username: string = "";
  names = [];
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.username = sessionStorage.getItem("username");
    this.names = [this.username];

    this.userService.getAllUsers().subscribe((results: User[]) =>
      this.users = results
    );
  }

}
