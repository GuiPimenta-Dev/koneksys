"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEquipmentController = exports.updateEquipmentUseCase = void 0;
const PostgresEquipmentRepository_1 = require("../../../repositories/implementations/PostgresEquipmentRepository");
const UpdateEquipmentUseCase_1 = require("./UpdateEquipmentUseCase");
const UpdateEquipmentController_1 = require("./UpdateEquipmentController");
const postgresEquipmentsRepository = new PostgresEquipmentRepository_1.PostgresEquipmentsRepository();
const updateEquipmentUseCase = new UpdateEquipmentUseCase_1.UpdateEquipmentUseCase(postgresEquipmentsRepository);
exports.updateEquipmentUseCase = updateEquipmentUseCase;
const updateEquipmentController = new UpdateEquipmentController_1.UpdateEquipmentController(updateEquipmentUseCase);
exports.updateEquipmentController = updateEquipmentController;
//# sourceMappingURL=index.js.map