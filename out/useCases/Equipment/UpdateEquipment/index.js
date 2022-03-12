"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEquipmentController = exports.updateEquipmentService = void 0;
const PostgresEquipmentRepository_1 = require("../../../repositories/implementations/PostgresEquipmentRepository");
const UpdateEquipmentService_1 = require("./UpdateEquipmentService");
const UpdateEquipmentController_1 = require("./UpdateEquipmentController");
const PostgresManufacturerRepository_1 = require("../../../repositories/implementations/PostgresManufacturerRepository");
const db_1 = __importDefault(require("../../../db"));
const postgresEquipmentsRepository = new PostgresEquipmentRepository_1.PostgresEquipmentsRepository(db_1.default);
const postgresManufacturersRepository = new PostgresManufacturerRepository_1.PostgresManufacturersRepository(db_1.default);
const updateEquipmentService = new UpdateEquipmentService_1.UpdateEquipmentService(postgresEquipmentsRepository, postgresManufacturersRepository);
exports.updateEquipmentService = updateEquipmentService;
const updateEquipmentController = new UpdateEquipmentController_1.UpdateEquipmentController(updateEquipmentService);
exports.updateEquipmentController = updateEquipmentController;
//# sourceMappingURL=index.js.map