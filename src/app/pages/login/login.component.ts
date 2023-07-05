import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  username = ''
  password = ''
  invalidLogin = false
  @Input() error: string | null;

  constructor(
    private router: Router,
    private authService: AuthenticationService
    ) {}

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  checkLogin() {
    (this.authService.authenticate(this.username, this.password).subscribe(
      data => {
        this.router.navigate([''])
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true
        this.error = error.message;

      }
    )
    );

  }

}
