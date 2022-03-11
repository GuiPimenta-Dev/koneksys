"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manufacturer = void 0;
const uuid_1 = require("uuid");
class Manufacturer {
    constructor(props, id) {
        Object.assign(this, props);
        if (!id) {
            this.id = uuid_1.v4();
        }
    }
}
exports.Manufacturer = Manufacturer;
//# sourceMappingURL=Manufacturer.js.map