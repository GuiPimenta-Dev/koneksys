"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listManufacturerController = exports.listManufacturerService = void 0;
const PostgresManufacturerRepository_1 = require("../../../repositories/implementations/PostgresManufacturerRepository");
const ListManufacturerService_1 = require("./ListManufacturerService");
const ListManufacturerController_1 = require("./ListManufacturerController");
const postgresManufacturerRepository = new PostgresManufacturerRepository_1.PostgresManufacturersRepository();
const listManufacturerService = new ListManufacturerService_1.ListManufacturerService(postgresManufacturerRepository);
exports.listManufacturerService = listManufacturerService;
const listManufacturerController = new ListManufacturerController_1.ListManufacturerController(listManufacturerService);
exports.listManufacturerController = listManufacturerController;
//# sourceMappingURL=index.js.map