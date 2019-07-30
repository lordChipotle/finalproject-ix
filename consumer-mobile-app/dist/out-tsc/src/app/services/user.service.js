import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user-model';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { environment } from '../../environments/environment';
var UserService = /** @class */ (function () {
    function UserService(http, navCtrl) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.user = new UserModel();
    }
    UserService.prototype.createUser = function (user, cb) {
        this.http.post(environment.BaseURL + '/api', user)
            .subscribe(function (res) {
            return cb(null, res);
        }, function (err) {
            return cb(err, null);
        });
    };
    UserService.prototype.getAllUsers = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(environment.BaseURL + '/api/user/users')
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err.msg);
            });
        });
    };
    UserService.prototype.getUserById = function (id, cb) {
        this.http.get(environment.BaseURL + '/api/user/' + id)
            .subscribe(function (res) {
            return cb(null, res);
        }, function (err) {
            return cb(err, null);
        });
    };
    UserService.prototype.deleteUserById = function (id, cb) {
        this.http.post(environment.BaseURL + '/api/user/delete/', id)
            .subscribe(function (res) {
            return cb(null, res);
        }, function (err) {
            return cb(err, null);
        });
    };
    UserService.prototype.updateUserById = function (id, cb) {
        this.http.post(environment.BaseURL + '/api/user/update/', id)
            .subscribe(function (res) {
            return cb(null, res);
        }, function (err) {
            return cb(err, null);
        });
    };
    UserService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            NavController])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map