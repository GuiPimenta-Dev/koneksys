"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEquipmentController = exports.deleteEquipmentService = void 0;
const PostgresEquipmentRepository_1 = require("../../../repositories/implementations/PostgresEquipmentRepository");
const DeleteEquipmentService_1 = require("./DeleteEquipmentService");
const DeleteEquipmentController_1 = require("./DeleteEquipmentController");
const postgresEquipmentsRepository = new PostgresEquipmentRepository_1.PostgresEquipmentsRepository();
const deleteEquipmentService = new DeleteEquipmentService_1.DeleteEquipmentService(postgresEquipmentsRepository);
exports.deleteEquipmentService = deleteEquipmentService;
const deleteEquipmentController = new DeleteEquipmentController_1.DeleteEquipmentController(deleteEquipmentService);
exports.deleteEquipmentController = deleteEquipmentController;
//# sourceMappingURL=index.js.map