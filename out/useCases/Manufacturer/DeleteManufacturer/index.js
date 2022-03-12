"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteManufacturerController = exports.deleteManufacturerService = void 0;
const PostgresManufacturerRepository_1 = require("../../../repositories/implementations/PostgresManufacturerRepository");
const DeleteManufacturerService_1 = require("./DeleteManufacturerService");
const DeleteManufacturerController_1 = require("./DeleteManufacturerController");
const db_1 = __importDefault(require("../../../db"));
const postgresManufacturersRepository = new PostgresManufacturerRepository_1.PostgresManufacturersRepository(db_1.default);
const deleteManufacturerService = new DeleteManufacturerService_1.DeleteManufacturerService(postgresManufacturersRepository);
exports.deleteManufacturerService = deleteManufacturerService;
const deleteManufacturerController = new DeleteManufacturerController_1.DeleteManufacturerController(deleteManufacturerService);
exports.deleteManufacturerController = deleteManufacturerController;
//# sourceMappingURL=index.js.map