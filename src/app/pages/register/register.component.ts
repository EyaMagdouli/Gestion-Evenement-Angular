import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { AppUser } from 'src/app/model/app-user.model';
import { AppUserService } from 'src/app/services/app-user.service';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  appUser: AppUser = {} as AppUser;

  constructor(
    private appUserService: AppUserService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  inscrire() {
    this.appUserService.addUser(this.appUser).subscribe(resp =>
      this.router.navigate(["/login"])
    );
  }

}
