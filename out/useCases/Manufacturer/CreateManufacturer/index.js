"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createManufacturerController = exports.createManufacturerService = void 0;
const PostgresManufacturerRepository_1 = require("../../../repositories/implementations/PostgresManufacturerRepository");
const CreateManufacturerService_1 = require("./CreateManufacturerService");
const CreateManufacturerController_1 = require("./CreateManufacturerController");
const db_1 = __importDefault(require("../../../db"));
const postgresManufacturersRepository = new PostgresManufacturerRepository_1.PostgresManufacturersRepository(db_1.default);
const createManufacturerService = new CreateManufacturerService_1.CreateManufacturerService(postgresManufacturersRepository);
exports.createManufacturerService = createManufacturerService;
const createManufacturerController = new CreateManufacturerController_1.CreateManufacturerController(createManufacturerService);
exports.createManufacturerController = createManufacturerController;
//# sourceMappingURL=index.js.map