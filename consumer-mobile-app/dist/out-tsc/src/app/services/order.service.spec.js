import { TestBed } from '@angular/core/testing';
import { OrderService } from './order.service';
describe('OrderService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(OrderService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=order.service.spec.js.map