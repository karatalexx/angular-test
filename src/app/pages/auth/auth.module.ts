import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { MatCardModule, MatTabsModule } from '@angular/material';

@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    MatCardModule,
    MatTabsModule,
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
