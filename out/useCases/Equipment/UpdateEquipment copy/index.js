"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEquipmentController = exports.createEquipmentUseCase = void 0;
const PostgresEquipmentRepository_1 = require("../../../repositories/implementations/PostgresEquipmentRepository");
const CreateEquipmentUseCase_1 = require("./CreateEquipmentUseCase");
const CreateEquipmentController_1 = require("./CreateEquipmentController");
const postgresEquipmentsRepository =
  new PostgresEquipmentRepository_1.PostgresEquipmentsRepository();
const createEquipmentUseCase =
  new CreateEquipmentUseCase_1.CreateEquipmentUseCase(
    postgresEquipmentsRepository
  );
exports.createEquipmentUseCase = createEquipmentUseCase;
const createEquipmentController =
  new CreateEquipmentController_1.CreateEquipmentController(
    createEquipmentUseCase
  );
exports.createEquipmentController = createEquipmentController;
//# sourceMappingURL=index.js.map
