import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var Tab5Page = /** @class */ (function () {
    function Tab5Page(router) {
        this.router = router;
        this.saved = [];
        this.hasSavedContents = this.saved.length > 0;
    }
    Tab5Page.prototype.go = function () {
        this.router.navigateByUrl('/tabs/tab2');
    };
    Tab5Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab5',
            templateUrl: 'tab5.page.html',
            styleUrls: ['tab5.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], Tab5Page);
    return Tab5Page;
}());
export { Tab5Page };
//# sourceMappingURL=tab5.page.js.map