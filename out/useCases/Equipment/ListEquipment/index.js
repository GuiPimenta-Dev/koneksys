"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listEquipmentController = exports.listEquipmentService = void 0;
const PostgresEquipmentRepository_1 = require("../../../repositories/implementations/PostgresEquipmentRepository");
const ListEquipmentService_1 = require("./ListEquipmentService");
const ListEquipmentController_1 = require("./ListEquipmentController");
const postgresEquipmentsRepository = new PostgresEquipmentRepository_1.PostgresEquipmentsRepository();
const listEquipmentService = new ListEquipmentService_1.ListEquipmentService(postgresEquipmentsRepository);
exports.listEquipmentService = listEquipmentService;
const listEquipmentController = new ListEquipmentController_1.ListEquipmentController(listEquipmentService);
exports.listEquipmentController = listEquipmentController;
//# sourceMappingURL=index.js.map