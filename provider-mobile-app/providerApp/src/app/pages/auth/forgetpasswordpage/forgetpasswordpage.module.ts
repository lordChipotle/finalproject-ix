import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ForgetpasswordpagePage } from './forgetpasswordpage.page';

const routes: Routes = [
  {
    path: '',
    component: ForgetpasswordpagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ForgetpasswordpagePage]
})
export class ForgetpasswordpagePageModule {}
