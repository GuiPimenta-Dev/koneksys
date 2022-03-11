"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Equipment = void 0;
const uuid_1 = require("uuid");
const crypto = require("crypto");
class Equipment {
    constructor(props, id) {
        Object.assign(this, props);
        if (!id) {
            this.id = uuid_1.v4();
            this.serialNumber = crypto.randomBytes(7).toString("hex");
        }
    }
}
exports.Equipment = Equipment;
//# sourceMappingURL=Equipment.js.map