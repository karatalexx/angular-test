import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInGuard } from './guards/log-in.guard';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/auth.module').then(mod => mod.AuthModule),
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main-page/main-page.module').then(mod => mod.MainPageModule),
    runGuardsAndResolvers: 'always',
    canLoad: [LogInGuard],
    canActivate: [LogInGuard],
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { enableTracing: true } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
