"use strict";
var service = (function () {
    function service() {
        this.count = 0;
        console.log('service constructor called');
    }
    service.prototype.plus = function () {
        return this.count++;
    };
    return service;
}());
exports.service = service;
//# sourceMappingURL=service.js.map