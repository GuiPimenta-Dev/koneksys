"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEquipmentController = exports.deleteEquipmentService = void 0;
const PostgresEquipmentRepository_1 = require("../../../repositories/implementations/PostgresEquipmentRepository");
const DeleteEquipmentService_1 = require("./DeleteEquipmentService");
const DeleteEquipmentController_1 = require("./DeleteEquipmentController");
const db_1 = __importDefault(require("../../../db"));
const postgresEquipmentsRepository = new PostgresEquipmentRepository_1.PostgresEquipmentsRepository(db_1.default);
const deleteEquipmentService = new DeleteEquipmentService_1.DeleteEquipmentService(postgresEquipmentsRepository);
exports.deleteEquipmentService = deleteEquipmentService;
const deleteEquipmentController = new DeleteEquipmentController_1.DeleteEquipmentController(deleteEquipmentService);
exports.deleteEquipmentController = deleteEquipmentController;
//# sourceMappingURL=index.js.map