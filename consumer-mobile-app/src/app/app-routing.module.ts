import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import {HttpClientModule} from '@angular/common/http';


const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'listing', loadChildren: './listing/listing.module#ListingPageModule', canActivate:[AuthGuard]},
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'forgetpassword', loadChildren: './forgetpassword/forgetpassword.module#ForgetpasswordPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    HttpClientModule
  ],
  exports: [RouterModule, HttpClientModule]
})
export class AppRoutingModule {}
