import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import {
  MatCardModule,
  MatTabsModule,
  MatFormFieldModule,
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatSnackBarModule,
} from '@angular/material';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    SignUpFormComponent,
    LogInFormComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatTabsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    AuthRoutingModule,
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ],
  exports: [
  ],
})
export class AuthModule { }
