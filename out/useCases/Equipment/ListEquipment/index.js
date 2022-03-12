"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listEquipmentController = exports.listEquipmentService = void 0;
const PostgresEquipmentRepository_1 = require("../../../repositories/implementations/PostgresEquipmentRepository");
const ListEquipmentService_1 = require("./ListEquipmentService");
const ListEquipmentController_1 = require("./ListEquipmentController");
const db_1 = __importDefault(require("../../../db"));
const postgresEquipmentsRepository = new PostgresEquipmentRepository_1.PostgresEquipmentsRepository(db_1.default);
const listEquipmentService = new ListEquipmentService_1.ListEquipmentService(postgresEquipmentsRepository);
exports.listEquipmentService = listEquipmentService;
const listEquipmentController = new ListEquipmentController_1.ListEquipmentController(listEquipmentService);
exports.listEquipmentController = listEquipmentController;
//# sourceMappingURL=index.js.map