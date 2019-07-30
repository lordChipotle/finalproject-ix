import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { RegisterPage } from '../register/register.page';
import { ForgetpasswordPage } from '../forgetpassword/forgetpassword.page';
var Tab1Page = /** @class */ (function () {
    function Tab1Page(modalController, authService, navCtrl, alertService
    /* ,public user = new UserModel() */ ) {
        this.modalController = modalController;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
    }
    Tab1Page.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.authService.getToken().then(function () {
            if (_this.authService.isLoggedIn) {
                _this.navCtrl.navigateRoot('/tabs/tab6');
            }
        });
    };
    Tab1Page.prototype.ngOnInit = function () {
    };
    Tab1Page.prototype.fPassModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var fPassModal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: ForgetpasswordPage
                        })];
                    case 1:
                        fPassModal = _a.sent();
                        return [4 /*yield*/, fPassModal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Tab1Page.prototype.registerModal = function () {
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
    Tab1Page.prototype.login = function (form) {
        var _this = this;
        this.authService.login(form.value.email, form.value.password).subscribe(function (data) {
            var newData = JSON.parse(JSON.stringify(data));
            _this.alertService.presentToast("Logged In");
            localStorage.setItem('loggedIn', "true");
            debugger;
            localStorage.setItem('userId', newData.user.id);
            _this.navCtrl.navigateRoot('/tabs/tab6');
        }, function (error) {
            _this.alertService.presentToast(error);
            console.log(error);
        }, function () {
        });
    };
    Tab1Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab1',
            templateUrl: 'tab1.page.html',
            styleUrls: ['tab1.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController,
            AuthService,
            NavController,
            AlertService
            /* ,public user = new UserModel() */ ])
    ], Tab1Page);
    return Tab1Page;
}());
export { Tab1Page };
//# sourceMappingURL=tab1.page.js.map