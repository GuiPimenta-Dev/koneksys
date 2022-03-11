"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listEquipmentsController = exports.listEquipmentsService = void 0;
const PostgresEquipmentRepository_1 = require("../../../repositories/implementations/PostgresEquipmentRepository");
const ListEquipmentsService_1 = require("./ListEquipmentsService");
const ListEquipmentsController_1 = require("./ListEquipmentsController");
const postgresEquipmentsRepository = new PostgresEquipmentRepository_1.PostgresEquipmentsRepository();
const listEquipmentsService = new ListEquipmentsService_1.ListEquipmentsService(postgresEquipmentsRepository);
exports.listEquipmentsService = listEquipmentsService;
const listEquipmentsController = new ListEquipmentsController_1.ListEquipmentsController(listEquipmentsService);
exports.listEquipmentsController = listEquipmentsController;
//# sourceMappingURL=index.js.map