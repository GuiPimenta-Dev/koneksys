"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteManufacturerController = exports.deleteManufacturerService = void 0;
const PostgresManufacturerRepository_1 = require("../../../repositories/implementations/PostgresManufacturerRepository");
const DeleteManufacturerService_1 = require("./DeleteManufacturerService");
const DeleteManufacturerController_1 = require("./DeleteManufacturerController");
const postgresManufacturersRepository = new PostgresManufacturerRepository_1.PostgresManufacturersRepository();
const deleteManufacturerService = new DeleteManufacturerService_1.DeleteManufacturerService(postgresManufacturersRepository);
exports.deleteManufacturerService = deleteManufacturerService;
const deleteManufacturerController = new DeleteManufacturerController_1.DeleteManufacturerController(deleteManufacturerService);
exports.deleteManufacturerController = deleteManufacturerController;
//# sourceMappingURL=index.js.map