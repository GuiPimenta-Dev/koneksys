import { PostgresManufacturersRepository } from "../../../repositories/implementations/PostgresManufacturerRepository";
import { ListManufacturersService } from "./ListManufacturersService";
import { ListManufacturersController } from "./ListManufacturersController";

const postgresManufacturersRepository = new PostgresManufacturersRepository();

const listManufacturerService = new ListManufacturersService(
  postgresManufacturersRepository
);

const listManufacturersController = new ListManufacturersController(
  listManufacturerService
);

export { listManufacturerService, listManufacturersController };
