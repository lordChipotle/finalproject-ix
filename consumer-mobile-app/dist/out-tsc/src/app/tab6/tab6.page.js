import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { UserModel } from '../models/user-model';
var Tab6Page = /** @class */ (function () {
    function Tab6Page(navCtrl, userService) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.user = new UserModel();
    }
    Tab6Page.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.checkIfLoggedIn();
        this.userService.getUserById(localStorage.getItem('userId'), function (err, res) {
            if (err) {
                alert(err);
            }
            else {
                _this.user = res[0];
            }
        });
    };
    // ngDoCheck(){
    //   this.checkIfLoggedIn();
    // }
    Tab6Page.prototype.checkIfLoggedIn = function () {
        var loggedIn = false;
        if (localStorage.getItem("loggedIn") === "true") {
            loggedIn = true;
        }
        if (!loggedIn) {
            this.navCtrl.navigateRoot('/tabs/tab1');
        }
        else {
            this.navCtrl.navigateRoot('/tabs/tab6');
        }
    };
    Tab6Page.prototype.logout = function () {
        localStorage.setItem("loggedIn", "false");
        this.navCtrl.navigateRoot('/tabs/tab1');
    };
    Tab6Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab6',
            templateUrl: 'tab6.page.html',
            styleUrls: ['tab6.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            UserService])
    ], Tab6Page);
    return Tab6Page;
}());
export { Tab6Page };
//# sourceMappingURL=tab6.page.js.map