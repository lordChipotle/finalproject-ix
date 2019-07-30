import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
var ListingsComponent = /** @class */ (function () {
    function ListingsComponent(route) {
        this.route = route;
    }
    ListingsComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('id');
    };
    ListingsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-listings',
            templateUrl: './listings.component.html',
            styleUrls: ['./listings.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute])
    ], ListingsComponent);
    return ListingsComponent;
}());
export { ListingsComponent };
//# sourceMappingURL=listings.component.js.map