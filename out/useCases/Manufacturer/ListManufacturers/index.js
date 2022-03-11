"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listManufacturersController = exports.listManufacturerService = void 0;
const PostgresManufacturerRepository_1 = require("../../../repositories/implementations/PostgresManufacturerRepository");
const ListManufacturersService_1 = require("./ListManufacturersService");
const ListManufacturersController_1 = require("./ListManufacturersController");
const postgresManufacturersRepository = new PostgresManufacturerRepository_1.PostgresManufacturersRepository();
const listManufacturerService = new ListManufacturersService_1.ListManufacturersService(postgresManufacturersRepository);
exports.listManufacturerService = listManufacturerService;
const listManufacturersController = new ListManufacturersController_1.ListManufacturersController(listManufacturerService);
exports.listManufacturersController = listManufacturersController;
//# sourceMappingURL=index.js.map