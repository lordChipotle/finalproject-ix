import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { AlertService } from './services/alert.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, authService, navCtrl, alertService) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    AppComponent.prototype.logout = function () {
        var _this = this;
        this.authService.logout().subscribe(function (data) {
            _this.alertService.presentToast(data['message']);
        }, function (error) {
            console.log(error);
        }, function () {
            _this.navCtrl.navigateRoot('/tabs/tab1');
        });
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            SplashScreen,
            StatusBar,
            AuthService,
            NavController,
            AlertService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map