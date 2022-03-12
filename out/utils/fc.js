"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readQuery = void 0;
const fs_1 = __importDefault(require("fs"));
function readQuery(file) {
    return fs_1.default.readFileSync(`src/resources/queries/${file}.sql`).toString();
}
exports.readQuery = readQuery;
//# sourceMappingURL=fc.js.map