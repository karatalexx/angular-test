import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './pages/auth/auth.module';


const routes: Routes = [
  {
    path: '**',
    loadChildren: () => import('./pages/auth/auth.module').then(mod => mod.AuthModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { enableTracing: true } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
