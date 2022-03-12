import { PostgresManufacturersRepository } from "../../../repositories/implementations/PostgresManufacturerRepository";
import { ListManufacturerService } from "./ListManufacturerService";
import { ListManufacturerController } from "./ListManufacturerController";
import client from "../../../db";

const postgresManufacturerRepository = new PostgresManufacturersRepository(
  client
);

const listManufacturerService = new ListManufacturerService(
  postgresManufacturerRepository
);

const listManufacturerController = new ListManufacturerController(
  listManufacturerService
);

export { listManufacturerService, listManufacturerController };
