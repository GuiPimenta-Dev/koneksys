"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listManufacturerEquipmentsController = exports.listManufacturerEquipmentsService = void 0;
const PostgresManufacturerRepository_1 = require("../../../repositories/implementations/PostgresManufacturerRepository");
const ListManufacturerEquipmentsService_1 = require("./ListManufacturerEquipmentsService");
const ListManufacturerEquipmentsController_1 = require("./ListManufacturerEquipmentsController");
const db_1 = __importDefault(require("../../../db"));
const postgresManufacturerRepository = new PostgresManufacturerRepository_1.PostgresManufacturersRepository(db_1.default);
const listManufacturerEquipmentsService = new ListManufacturerEquipmentsService_1.ListManufacturerEquipmentsService(postgresManufacturerRepository);
exports.listManufacturerEquipmentsService = listManufacturerEquipmentsService;
const listManufacturerEquipmentsController = new ListManufacturerEquipmentsController_1.ListManufacturerEquipmentsController(listManufacturerEquipmentsService);
exports.listManufacturerEquipmentsController = listManufacturerEquipmentsController;
//# sourceMappingURL=index.js.map