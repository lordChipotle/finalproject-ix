import * as tslib_1 from "tslib";
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab6Page } from './tab6.page';
var Tab6PageModule = /** @class */ (function () {
    function Tab6PageModule() {
    }
    Tab6PageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                IonicModule,
                CommonModule,
                FormsModule,
                RouterModule.forChild([{ path: '', component: Tab6Page }])
            ],
            declarations: [Tab6Page]
        })
    ], Tab6PageModule);
    return Tab6PageModule;
}());
export { Tab6PageModule };
//# sourceMappingURL=tab6.module.js.map