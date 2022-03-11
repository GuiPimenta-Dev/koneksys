"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEquipmentController = exports.deleteEquipmentUseCase = void 0;
const PostgresEquipmentRepository_1 = require("../../../repositories/implementations/PostgresEquipmentRepository");
const DeleteEquipmentUseCase_1 = require("./DeleteEquipmentUseCase");
const DeleteEquipmentController_1 = require("./DeleteEquipmentController");
const postgresEquipmentsRepository = new PostgresEquipmentRepository_1.PostgresEquipmentsRepository();
const deleteEquipmentUseCase = new DeleteEquipmentUseCase_1.DeleteEquipmentUseCase(postgresEquipmentsRepository);
exports.deleteEquipmentUseCase = deleteEquipmentUseCase;
const deleteEquipmentController = new DeleteEquipmentController_1.DeleteEquipmentController(deleteEquipmentUseCase);
exports.deleteEquipmentController = deleteEquipmentController;
//# sourceMappingURL=index.js.map