import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ForgetpasswordPage } from './forgetpassword.page';
var routes = [
    {
        path: '',
        component: ForgetpasswordPage
    }
];
var ForgetpasswordPageModule = /** @class */ (function () {
    function ForgetpasswordPageModule() {
    }
    ForgetpasswordPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ForgetpasswordPage]
        })
    ], ForgetpasswordPageModule);
    return ForgetpasswordPageModule;
}());
export { ForgetpasswordPageModule };
//# sourceMappingURL=forgetpassword.module.js.map