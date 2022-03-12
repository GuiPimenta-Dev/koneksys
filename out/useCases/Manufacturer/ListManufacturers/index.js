"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listManufacturersController = exports.listManufacturerService = void 0;
const PostgresManufacturerRepository_1 = require("../../../repositories/implementations/PostgresManufacturerRepository");
const ListManufacturersService_1 = require("./ListManufacturersService");
const ListManufacturersController_1 = require("./ListManufacturersController");
const db_1 = __importDefault(require("../../../db"));
const postgresManufacturersRepository = new PostgresManufacturerRepository_1.PostgresManufacturersRepository(db_1.default);
const listManufacturerService = new ListManufacturersService_1.ListManufacturersService(postgresManufacturersRepository);
exports.listManufacturerService = listManufacturerService;
const listManufacturersController = new ListManufacturersController_1.ListManufacturersController(listManufacturerService);
exports.listManufacturersController = listManufacturersController;
//# sourceMappingURL=index.js.map