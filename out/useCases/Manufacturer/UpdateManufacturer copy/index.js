"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateManufacturerController = exports.updateManufacturerUseCase =
  void 0;
const PostgresManufacturerRepository_1 = require("../../../repositories/implementations/PostgresManufacturerRepository");
const UpdateManufacturerUseCase_1 = require("./UpdateManufacturerUseCase");
const UpdateManufacturerController_1 = require("./UpdateManufacturerController");
const postgresManufacturersRepository =
  new PostgresManufacturerRepository_1.PostgresManufacturersRepository();
const updateManufacturerUseCase =
  new UpdateManufacturerUseCase_1.UpdateManufacturerUseCase(
    postgresManufacturersRepository
  );
exports.updateManufacturerUseCase = updateManufacturerUseCase;
const updateManufacturerController =
  new UpdateManufacturerController_1.UpdateManufacturerController(
    updateManufacturerUseCase
  );
exports.updateManufacturerController = updateManufacturerController;
//# sourceMappingURL=index.js.map
