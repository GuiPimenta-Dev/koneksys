import { PostgresManufacturersRepository } from "../../../repositories/implementations/PostgresManufacturerRepository";
import { CreateManufacturerService } from "./CreateManufacturerService";
import { CreateManufacturerController } from "./CreateManufacturerController";

const postgresManufacturersRepository = new PostgresManufacturersRepository();

const createManufacturerService = new CreateManufacturerService(
  postgresManufacturersRepository
);

const createManufacturerController = new CreateManufacturerController(
  createManufacturerService
);

export { createManufacturerService, createManufacturerController };
