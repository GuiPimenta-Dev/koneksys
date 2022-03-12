"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateManufacturerController = exports.updateManufacturerService = void 0;
const PostgresManufacturerRepository_1 = require("../../../repositories/implementations/PostgresManufacturerRepository");
const UpdateManufacturerService_1 = require("./UpdateManufacturerService");
const UpdateManufacturerController_1 = require("./UpdateManufacturerController");
const db_1 = __importDefault(require("../../../db"));
const postgresManufacturersRepository = new PostgresManufacturerRepository_1.PostgresManufacturersRepository(db_1.default);
const updateManufacturerService = new UpdateManufacturerService_1.UpdateManufacturerService(postgresManufacturersRepository);
exports.updateManufacturerService = updateManufacturerService;
const updateManufacturerController = new UpdateManufacturerController_1.UpdateManufacturerController(updateManufacturerService);
exports.updateManufacturerController = updateManufacturerController;
//# sourceMappingURL=index.js.map