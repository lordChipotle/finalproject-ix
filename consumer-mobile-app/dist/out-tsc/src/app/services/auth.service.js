import * as tslib_1 from "tslib";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service';
var AuthService = /** @class */ (function () {
    function AuthService(http, storage, env) {
        this.http = http;
        this.storage = storage;
        this.env = env;
        this.isLoggedIn = false;
    }
    AuthService.prototype.login = function (email, password) {
        return this.http.post(this.env.API_URL + 'api/auth/login', { email: email, password: password });
        // ).pipe(
        //   tap(token => {
        //     this.storage.setItem('token', token)
        //     .then(
        //       () => {
        //         console.log('Token Stored');
        //       },
        //       error => console.error('Error storing item', error)
        //     );
        //     this.token = token;
        //     this.isLoggedIn = true;
        //     return token;
        //   }),
        // );
    };
    AuthService.prototype.register = function (firstname, surname, cellPhone, email, password, role) {
        return this.http.post(this.env.API_URL + 'api/auth/register', { firstname: firstname, surname: surname, cellPhone: cellPhone, email: email, password: password, role: role });
    };
    AuthService.prototype.fPass = function (email) {
        return this.http.post(this.env.API_URL + 'api/auth/forgetpassword', { email: email });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        var headers = new HttpHeaders({
            'Authorization': this.token["token_type"] + " " + this.token["access_token"]
        });
        return this.http.get(this.env.API_URL + 'api/auth/logout', { headers: headers })
            .pipe(tap(function (data) {
            _this.storage.remove("token");
            _this.isLoggedIn = false;
            delete _this.token;
            return data;
        }));
    };
    AuthService.prototype.user = function () {
        var headers = new HttpHeaders({
            'Authorization': this.token["token_type"] + " " + this.token["access_token"]
        });
        return this.http.get(this.env.API_URL + 'api/auth/user', { headers: headers })
            .pipe(tap(function (user) {
            return user;
        }));
    };
    AuthService.prototype.getToken = function () {
        var _this = this;
        return this.storage.getItem('token').then(function (data) {
            _this.token = data;
            if (_this.token != null) {
                _this.isLoggedIn = true;
            }
            else {
                _this.isLoggedIn = false;
            }
        }, function (error) {
            _this.token = null;
            _this.isLoggedIn = false;
        });
    };
    AuthService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            NativeStorage,
            EnvService])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map