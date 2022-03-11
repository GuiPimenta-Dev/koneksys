"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateManufacturerController = exports.updateManufacturerService = void 0;
const PostgresManufacturerRepository_1 = require("../../../repositories/implementations/PostgresManufacturerRepository");
const UpdateManufacturerService_1 = require("./UpdateManufacturerService");
const UpdateManufacturerController_1 = require("./UpdateManufacturerController");
const postgresManufacturersRepository = new PostgresManufacturerRepository_1.PostgresManufacturersRepository();
const updateManufacturerService = new UpdateManufacturerService_1.UpdateManufacturerService(postgresManufacturersRepository);
exports.updateManufacturerService = updateManufacturerService;
const updateManufacturerController = new UpdateManufacturerController_1.UpdateManufacturerController(updateManufacturerService);
exports.updateManufacturerController = updateManufacturerController;
//# sourceMappingURL=index.js.map