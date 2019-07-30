import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var Tab4Page = /** @class */ (function () {
    function Tab4Page(router) {
        this.router = router;
        this.trips = [];
        this.hasTrips = this.trips.length > 0;
    }
    Tab4Page.prototype.go = function () {
        this.router.navigateByUrl('/tabs/tab2');
    };
    Tab4Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab4',
            templateUrl: 'tab4.page.html',
            styleUrls: ['tab4.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], Tab4Page);
    return Tab4Page;
}());
export { Tab4Page };
//# sourceMappingURL=tab4.page.js.map