"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEquipmentController = exports.updateEquipmentService = void 0;
const PostgresEquipmentRepository_1 = require("../../../repositories/implementations/PostgresEquipmentRepository");
const UpdateEquipmentService_1 = require("./UpdateEquipmentService");
const UpdateEquipmentController_1 = require("./UpdateEquipmentController");
const PostgresManufacturerRepository_1 = require("../../../repositories/implementations/PostgresManufacturerRepository");
const postgresEquipmentsRepository = new PostgresEquipmentRepository_1.PostgresEquipmentsRepository();
const postgresManufacturersRepository = new PostgresManufacturerRepository_1.PostgresManufacturersRepository();
const updateEquipmentService = new UpdateEquipmentService_1.UpdateEquipmentService(postgresEquipmentsRepository, postgresManufacturersRepository);
exports.updateEquipmentService = updateEquipmentService;
const updateEquipmentController = new UpdateEquipmentController_1.UpdateEquipmentController(updateEquipmentService);
exports.updateEquipmentController = updateEquipmentController;
//# sourceMappingURL=index.js.map