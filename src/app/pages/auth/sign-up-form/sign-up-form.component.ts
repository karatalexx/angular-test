import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent {
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
  firstNameFormControl = new FormControl('', [
    Validators.required,
  ]);
  lastNameFormControl = new FormControl('', [
    Validators.required,
  ]);

  onSubmit() {
    // TODO add validate fields
    this.userService.signUp({
      firstName: this.firstNameFormControl.value,
      lastName: this.lastNameFormControl.value,
      email: this.emailFormControl.value,
      password: this.passwordFormControl.value
    }).subscribe(
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
