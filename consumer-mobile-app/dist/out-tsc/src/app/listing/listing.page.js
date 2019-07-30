import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var ListingPage = /** @class */ (function () {
    function ListingPage(imgurl) {
        this.imgurl = imgurl;
        this.items = [];
    }
    ListingPage.prototype.ngOnInit = function () {
    };
    ListingPage.prototype.showInputText = function () {
    };
    ListingPage = tslib_1.__decorate([
        Component({
            selector: 'app-listing',
            templateUrl: './listing.page.html',
            styleUrls: ['./listing.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Array])
    ], ListingPage);
    return ListingPage;
}());
export { ListingPage };
//# sourceMappingURL=listing.page.js.map