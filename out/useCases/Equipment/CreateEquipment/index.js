"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEquipmentController = exports.createEquipmentService = void 0;
const PostgresEquipmentRepository_1 = require("../../../repositories/implementations/PostgresEquipmentRepository");
const CreateEquipmentService_1 = require("./CreateEquipmentService");
const CreateEquipmentController_1 = require("./CreateEquipmentController");
const postgresEquipmentsRepository = new PostgresEquipmentRepository_1.PostgresEquipmentsRepository();
const createEquipmentService = new CreateEquipmentService_1.CreateEquipmentService(postgresEquipmentsRepository);
exports.createEquipmentService = createEquipmentService;
const createEquipmentController = new CreateEquipmentController_1.CreateEquipmentController(createEquipmentService);
exports.createEquipmentController = createEquipmentController;
//# sourceMappingURL=index.js.map