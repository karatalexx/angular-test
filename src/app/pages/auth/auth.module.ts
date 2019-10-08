import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AuthComponent,
      },
    ])
  ],
  providers: [
  ],
  exports: [
  ],
})
export class AuthModule { }
