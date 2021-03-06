import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ForgetpasswordPage } from '../forgetpassword/forgetpassword.page';
import { RegisterPage } from '../register/register.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page
  }
];
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page, ForgetpasswordPage, RegisterPage],
  entryComponents: [ForgetpasswordPage, RegisterPage]})
export class Tab1PageModule {}
