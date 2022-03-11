"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listManufacturersController = exports.listManufacturerUseCase = void 0;
const PostgresManufacturerRepository_1 = require("../../../repositories/implementations/PostgresManufacturerRepository");
const ListManufacturersUseCase_1 = require("./ListManufacturersUseCase");
const ListManufacturersController_1 = require("./ListManufacturersController");
const postgresManufacturersRepository = new PostgresManufacturerRepository_1.PostgresManufacturersRepository();
const listManufacturerUseCase = new ListManufacturersUseCase_1.ListManufacturersUseCase(postgresManufacturersRepository);
exports.listManufacturerUseCase = listManufacturerUseCase;
const listManufacturersController = new ListManufacturersController_1.ListManufacturersController(listManufacturerUseCase);
exports.listManufacturersController = listManufacturersController;
//# sourceMappingURL=index.js.map