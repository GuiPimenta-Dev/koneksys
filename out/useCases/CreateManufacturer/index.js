"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createManufacturerController = exports.createManufacturerUseCase = void 0;
const PostgresManufacturerRepository_1 = require("../../repositories/implementations/PostgresManufacturerRepository");
const CreateManufacturerUseCase_1 = require("./CreateManufacturerUseCase");
const CreateManufacturerController_1 = require("./CreateManufacturerController");
const postgresManufacturersRepository = new PostgresManufacturerRepository_1.PostgresManufacturersRepository();
const createManufacturerUseCase = new CreateManufacturerUseCase_1.CreateManufacturerUseCase(postgresManufacturersRepository);
exports.createManufacturerUseCase = createManufacturerUseCase;
const createManufacturerController = new CreateManufacturerController_1.CreateManufacturerController(createManufacturerUseCase);
exports.createManufacturerController = createManufacturerController;
//# sourceMappingURL=index.js.map