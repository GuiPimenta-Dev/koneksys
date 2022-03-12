"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listManufacturerController = exports.listManufacturerService = void 0;
const PostgresManufacturerRepository_1 = require("../../../repositories/implementations/PostgresManufacturerRepository");
const ListManufacturerService_1 = require("./ListManufacturerService");
const ListManufacturerController_1 = require("./ListManufacturerController");
const db_1 = __importDefault(require("../../../db"));
const postgresManufacturerRepository = new PostgresManufacturerRepository_1.PostgresManufacturersRepository(db_1.default);
const listManufacturerService = new ListManufacturerService_1.ListManufacturerService(postgresManufacturerRepository);
exports.listManufacturerService = listManufacturerService;
const listManufacturerController = new ListManufacturerController_1.ListManufacturerController(listManufacturerService);
exports.listManufacturerController = listManufacturerController;
//# sourceMappingURL=index.js.map