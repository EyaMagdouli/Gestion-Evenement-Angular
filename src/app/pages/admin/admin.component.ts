import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-Admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  username: string = "";
  names = [];
  users = [];
  Admin = [];
  constructor(private AdminService: AdminService) { }

  ngOnInit() {
    this.username = sessionStorage.getItem("username");
    this.names = [this.username];

    this.AdminService.getAllAdmin().subscribe(results =>
      this.Admin = results
    );
  }

}
