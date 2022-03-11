"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createManufacturerController = exports.createManufacturerService = void 0;
const PostgresManufacturerRepository_1 = require("../../../repositories/implementations/PostgresManufacturerRepository");
const CreateManufacturerService_1 = require("./CreateManufacturerService");
const CreateManufacturerController_1 = require("./CreateManufacturerController");
const postgresManufacturersRepository = new PostgresManufacturerRepository_1.PostgresManufacturersRepository();
const createManufacturerService = new CreateManufacturerService_1.CreateManufacturerService(postgresManufacturersRepository);
exports.createManufacturerService = createManufacturerService;
const createManufacturerController = new CreateManufacturerController_1.CreateManufacturerController(createManufacturerService);
exports.createManufacturerController = createManufacturerController;
//# sourceMappingURL=index.js.map