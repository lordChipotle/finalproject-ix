import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { RegisterPage } from '../register/register.page';
var ForgetpasswordPage = /** @class */ (function () {
    function ForgetpasswordPage(modalController, authService, navCtrl, alertService) {
        this.modalController = modalController;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
    }
    ForgetpasswordPage.prototype.ngOnInit = function () {
    };
    ForgetpasswordPage.prototype.dismissforget = function () {
        this.modalController.dismiss();
    };
    ForgetpasswordPage.prototype.register = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var registerModal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: RegisterPage
                        })];
                    case 1:
                        registerModal = _a.sent();
                        return [4 /*yield*/, registerModal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //fPass not finished
    ForgetpasswordPage.prototype.fPass = function (form) {
        var _this = this;
        this.authService.fPass(form.value.email).subscribe(function (data) {
            _this.authService.login(form.value.email, form.value.password).subscribe(function (data) {
            }, function (error) {
                console.log(error);
            }, function () {
                _this.dismissforget();
                _this.navCtrl.navigateRoot('/tab1');
            });
            _this.alertService.presentToast(data['message']);
        }, function (error) {
            console.log(error);
        }, function () {
        });
    };
    ForgetpasswordPage = tslib_1.__decorate([
        Component({
            selector: 'app-forgetpassword',
            templateUrl: './forgetpassword.page.html',
            styleUrls: ['./forgetpassword.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController,
            AuthService,
            NavController,
            AlertService])
    ], ForgetpasswordPage);
    return ForgetpasswordPage;
}());
export { ForgetpasswordPage };
//# sourceMappingURL=forgetpassword.page.js.map