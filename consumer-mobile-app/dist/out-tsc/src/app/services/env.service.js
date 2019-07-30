import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var EnvService = /** @class */ (function () {
    function EnvService() {
        this.API_URL = 'http://localhost:5000/';
    }
    EnvService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], EnvService);
    return EnvService;
}());
export { EnvService };
//# sourceMappingURL=env.service.js.map