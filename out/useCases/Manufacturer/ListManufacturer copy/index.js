"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listManufacturerController = exports.listManufacturerUseCase = void 0;
const PostgresManufacturerRepository_1 = require("../../../repositories/implementations/PostgresManufacturerRepository");
const ListManufacturerUseCase_1 = require("./ListManufacturerUseCase");
const ListManufacturerController_1 = require("./ListManufacturerController");
const postgresManufacturerRepository =
  new PostgresManufacturerRepository_1.PostgresManufacturersRepository();
const listManufacturerUseCase =
  new ListManufacturerUseCase_1.ListManufacturerUseCase(
    postgresManufacturerRepository
  );
exports.listManufacturerUseCase = listManufacturerUseCase;
const listManufacturerController =
  new ListManufacturerController_1.ListManufacturerController(
    listManufacturerUseCase
  );
exports.listManufacturerController = listManufacturerController;
//# sourceMappingURL=index.js.map
