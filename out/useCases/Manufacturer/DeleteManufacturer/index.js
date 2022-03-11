"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteManufacturerController = exports.deleteManufacturerUseCase = void 0;
const PostgresManufacturerRepository_1 = require("../../../repositories/implementations/PostgresManufacturerRepository");
const DeleteManufacturerUseCase_1 = require("./DeleteManufacturerUseCase");
const DeleteManufacturerController_1 = require("./DeleteManufacturerController");
const postgresManufacturersRepository = new PostgresManufacturerRepository_1.PostgresManufacturersRepository();
const deleteManufacturerUseCase = new DeleteManufacturerUseCase_1.DeleteManufacturerUseCase(postgresManufacturersRepository);
exports.deleteManufacturerUseCase = deleteManufacturerUseCase;
const deleteManufacturerController = new DeleteManufacturerController_1.DeleteManufacturerController(deleteManufacturerUseCase);
exports.deleteManufacturerController = deleteManufacturerController;
//# sourceMappingURL=index.js.map