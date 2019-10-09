import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss']
})
export class LogInFormComponent {
  constructor(
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
    // TODO add validate fields
    this.userService.logIn(this.emailFormControl.value, this.passwordFormControl.value).subscribe(
      (userData, ...other) => {
        console.log(userData, other)
      },
      (error) => {
        console.log( error.error.message);
        return true;
      }
    );
  }

}
