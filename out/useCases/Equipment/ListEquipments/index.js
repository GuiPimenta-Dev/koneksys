"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listEquipmentsController = exports.listEquipmentsUseCase = void 0;
const PostgresEquipmentRepository_1 = require("../../../repositories/implementations/PostgresEquipmentRepository");
const ListEquipmentsUseCase_1 = require("./ListEquipmentsUseCase");
const ListEquipmentsController_1 = require("./ListEquipmentsController");
const postgresEquipmentsRepository = new PostgresEquipmentRepository_1.PostgresEquipmentsRepository();
const listEquipmentsUseCase = new ListEquipmentsUseCase_1.ListEquipmentsUseCase(postgresEquipmentsRepository);
exports.listEquipmentsUseCase = listEquipmentsUseCase;
const listEquipmentsController = new ListEquipmentsController_1.ListEquipmentsController(listEquipmentsUseCase);
exports.listEquipmentsController = listEquipmentsController;
//# sourceMappingURL=index.js.map