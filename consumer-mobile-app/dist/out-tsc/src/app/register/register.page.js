import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { Tab1Page } from '../tab1/tab1.page';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(modalController, authService, navCtrl, alertService) {
        this.modalController = modalController;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.dismissregister = function () {
        this.modalController.dismiss();
    };
    RegisterPage.prototype.dismissAll = function () {
        this.dismissregister();
    };
    RegisterPage.prototype.loginModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loginModal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.dismissregister();
                        return [4 /*yield*/, this.modalController.create({
                                component: Tab1Page,
                            })];
                    case 1:
                        loginModal = _a.sent();
                        return [4 /*yield*/, loginModal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RegisterPage.prototype.presentAlert = function (msg) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.alertService.presentToast(msg);
                return [2 /*return*/];
            });
        });
    };
    RegisterPage.prototype.register = function (form) {
        var _this = this;
        debugger;
        this.authService.register(form.value.firstname, form.value.surname, form.value.cellPhone, form.value.email, form.value.password, form.value.role).subscribe(function (data) {
            debugger;
            _this.authService.login(form.value.email, form.value.password).subscribe(function (data) {
                _this.dismissregister();
                localStorage.setItem('loggedIn', "true");
                _this.navCtrl.navigateRoot('/tabs/tab6');
            }, function (error) {
                debugger;
                console.log(error);
                console.log("bruh");
                _this.presentAlert(error);
            }, function () {
                console.log("done");
            });
            _this.alertService.presentToast(data['message']);
        }, function (error) {
            debugger;
            console.log(error);
            _this.presentAlert(error);
        }, function () {
        });
    };
    RegisterPage = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.page.html',
            styleUrls: ['./register.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController,
            AuthService,
            NavController,
            AlertService])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.page.js.map