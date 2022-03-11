import { PostgresManufacturersRepository } from "../../../repositories/implementations/PostgresManufacturerRepository";
import { ListManufacturersUseCase } from "./ListManufacturersUseCase";
import { ListManufacturersController } from "./ListManufacturersController";

const postgresManufacturersRepository = new PostgresManufacturersRepository();

const listManufacturerUseCase = new ListManufacturersUseCase(
  postgresManufacturersRepository
);

const listManufacturersController = new ListManufacturersController(
  listManufacturerUseCase
);

export { listManufacturerUseCase, listManufacturersController };
