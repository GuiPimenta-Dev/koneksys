import { PostgresManufacturersRepository } from "../../../repositories/implementations/PostgresManufacturerRepository";
import { CreateManufacturerUseCase } from "./CreateManufacturerUseCase";
import { CreateManufacturerController } from "./CreateManufacturerController";

const postgresManufacturersRepository = new PostgresManufacturersRepository();

const createManufacturerUseCase = new CreateManufacturerUseCase(
  postgresManufacturersRepository
);

const createManufacturerController = new CreateManufacturerController(
  createManufacturerUseCase
);

export { createManufacturerUseCase, createManufacturerController };
