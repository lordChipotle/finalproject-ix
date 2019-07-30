import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
var ListingService = /** @class */ (function () {
    //listings: Array<listing>;
    //listing1 = new this.listing1("blah","Cape town",1500);
    function ListingService(http, navCtrl) {
        this.http = http;
        this.navCtrl = navCtrl;
    }
    ListingService.prototype.addListings = function (listing, cb) {
        this.http.post(environment.BaseURL + '/api/listings', listing)
            .subscribe(function (response) {
            cb(null, response);
        }, function (err) {
            cb(err, null);
        });
    };
    ListingService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            NavController])
    ], ListingService);
    return ListingService;
}());
export { ListingService };
//# sourceMappingURL=listing.service.js.map