import { PostgresManufacturersRepository } from "../../../repositories/implementations/PostgresManufacturerRepository";
import { ListManufacturerUseCase } from "./ListManufacturerUseCase";
import { ListManufacturerController } from "./ListManufacturerController";

const postgresManufacturerRepository = new PostgresManufacturersRepository();

const listManufacturerUseCase = new ListManufacturerUseCase(
  postgresManufacturerRepository
);

const listManufacturerController = new ListManufacturerController(
  listManufacturerUseCase
);

export { listManufacturerUseCase, listManufacturerController };
