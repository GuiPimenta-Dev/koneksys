import { PostgresManufacturersRepository } from "../../../repositories/implementations/PostgresManufacturerRepository";
import { ListManufacturersService } from "./ListManufacturersService";
import { ListManufacturersController } from "./ListManufacturersController";
import client from "../../../db";

const postgresManufacturersRepository = new PostgresManufacturersRepository(
  client
);

const listManufacturerService = new ListManufacturersService(
  postgresManufacturersRepository
);

const listManufacturersController = new ListManufacturersController(
  listManufacturerService
);

export { listManufacturerService, listManufacturersController };
