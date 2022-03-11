"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listManufacturerEquipmentsController = exports.listManufacturerEquipmentsService = void 0;
const PostgresManufacturerRepository_1 = require("../../../repositories/implementations/PostgresManufacturerRepository");
const ListManufacturerEquipmentsService_1 = require("./ListManufacturerEquipmentsService");
const ListManufacturerEquipmentsController_1 = require("./ListManufacturerEquipmentsController");
const postgresManufacturerRepository = new PostgresManufacturerRepository_1.PostgresManufacturersRepository();
const listManufacturerEquipmentsService = new ListManufacturerEquipmentsService_1.ListManufacturerEquipmentsService(postgresManufacturerRepository);
exports.listManufacturerEquipmentsService = listManufacturerEquipmentsService;
const listManufacturerEquipmentsController = new ListManufacturerEquipmentsController_1.ListManufacturerEquipmentsController(listManufacturerEquipmentsService);
exports.listManufacturerEquipmentsController = listManufacturerEquipmentsController;
//# sourceMappingURL=index.js.map