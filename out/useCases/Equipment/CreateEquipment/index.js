"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEquipmentController = exports.createEquipmentService = void 0;
const PostgresEquipmentRepository_1 = require("../../../repositories/implementations/PostgresEquipmentRepository");
const PostgresManufacturerRepository_1 = require("../../../repositories/implementations/PostgresManufacturerRepository");
const CreateEquipmentService_1 = require("./CreateEquipmentService");
const CreateEquipmentController_1 = require("./CreateEquipmentController");
const db_1 = __importDefault(require("../../../db"));
const postgresEquipmentsRepository = new PostgresEquipmentRepository_1.PostgresEquipmentsRepository(db_1.default);
const postgresManufacturersRepository = new PostgresManufacturerRepository_1.PostgresManufacturersRepository(db_1.default);
const createEquipmentService = new CreateEquipmentService_1.CreateEquipmentService(postgresEquipmentsRepository, postgresManufacturersRepository);
exports.createEquipmentService = createEquipmentService;
const createEquipmentController = new CreateEquipmentController_1.CreateEquipmentController(createEquipmentService);
exports.createEquipmentController = createEquipmentController;
//# sourceMappingURL=index.js.map