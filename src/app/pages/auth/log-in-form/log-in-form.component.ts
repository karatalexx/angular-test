import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss']
})
export class LogInFormComponent {
  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  isHidePassword = true;
  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);

  onSubmit() {
    if (
      !this.emailFormControl.valid
      || !this.passwordFormControl.valid
    ) {
      return;
    }

    this.userService.logIn(this.emailFormControl.value, this.passwordFormControl.value).subscribe(
      (userData, ...other) => {
        this.router.navigate(['/main']);
      },
      (error) => {
        console.error(error.error.message);
        return true;
      }
    );
  }

}
