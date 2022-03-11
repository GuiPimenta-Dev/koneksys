"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listEquipmentOwnerController = exports.listEquipmentOwnerService = void 0;
const PostgresEquipmentRepository_1 = require("../../../repositories/implementations/PostgresEquipmentRepository");
const ListEquipmentOwnerService_1 = require("./ListEquipmentOwnerService");
const ListEquipmentOwnerController_1 = require("./ListEquipmentOwnerController");
const postgresEquipmentsRepository = new PostgresEquipmentRepository_1.PostgresEquipmentsRepository();
const listEquipmentOwnerService = new ListEquipmentOwnerService_1.ListEquipmentOwnerService(postgresEquipmentsRepository);
exports.listEquipmentOwnerService = listEquipmentOwnerService;
const listEquipmentOwnerController = new ListEquipmentOwnerController_1.ListEquipmentOwnerController(listEquipmentOwnerService);
exports.listEquipmentOwnerController = listEquipmentOwnerController;
//# sourceMappingURL=index.js.map