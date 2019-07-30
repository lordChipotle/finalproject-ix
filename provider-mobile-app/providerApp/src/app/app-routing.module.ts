import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  { path: 'landing', loadChildren: './pages/landing/landing.module#LandingPageModule' },  
  { path: 'login', loadChildren: './pages/auth/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/auth/register/register.module#RegisterPageModule' },
  
  { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule', canActivate: [AuthGuard] },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard] },
  { path: 'register-page', loadChildren: './register-page/register-page.module#RegisterPagePageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'users', loadChildren: './pages/users/users.module#UsersPageModule' },
  { path: 'update-user', loadChildren: './pages/update-user/update-user.module#UpdateUserPageModule' },
  { path: 'forgetpasswordpage', loadChildren: './forgetpasswordpage/forgetpasswordpage.module#ForgetpasswordpagePageModule' },
  { path: 'forgetpasswordpage', loadChildren: './pages/forgetpasswordpage/forgetpasswordpage.module#ForgetpasswordpagePageModule' },
  { path: 'forgetpasswordpage', loadChildren: './pages/auth/forgetpasswordpage/forgetpasswordpage.module#ForgetpasswordpagePageModule' },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}