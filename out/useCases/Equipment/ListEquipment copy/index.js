"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listEquipmentController = exports.listEquipmentUseCase = void 0;
const PostgresEquipmentRepository_1 = require("../../../repositories/implementations/PostgresEquipmentRepository");
const ListEquipmentUseCase_1 = require("./ListEquipmentUseCase");
const ListEquipmentController_1 = require("./ListEquipmentController");
const postgresEquipmentsRepository =
  new PostgresEquipmentRepository_1.PostgresEquipmentsRepository();
const listEquipmentUseCase = new ListEquipmentUseCase_1.ListEquipmentUseCase(
  postgresEquipmentsRepository
);
exports.listEquipmentUseCase = listEquipmentUseCase;
const listEquipmentController =
  new ListEquipmentController_1.ListEquipmentController(listEquipmentUseCase);
exports.listEquipmentController = listEquipmentController;
//# sourceMappingURL=index.js.map
