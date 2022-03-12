"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listEquipmentOwnerController = exports.listEquipmentOwnerService = void 0;
const PostgresEquipmentRepository_1 = require("../../../repositories/implementations/PostgresEquipmentRepository");
const ListEquipmentOwnerService_1 = require("./ListEquipmentOwnerService");
const ListEquipmentOwnerController_1 = require("./ListEquipmentOwnerController");
const db_1 = __importDefault(require("../../../db"));
const postgresEquipmentsRepository = new PostgresEquipmentRepository_1.PostgresEquipmentsRepository(db_1.default);
const listEquipmentOwnerService = new ListEquipmentOwnerService_1.ListEquipmentOwnerService(postgresEquipmentsRepository);
exports.listEquipmentOwnerService = listEquipmentOwnerService;
const listEquipmentOwnerController = new ListEquipmentOwnerController_1.ListEquipmentOwnerController(listEquipmentOwnerService);
exports.listEquipmentOwnerController = listEquipmentOwnerController;
//# sourceMappingURL=index.js.map