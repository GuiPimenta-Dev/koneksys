import { PostgresManufacturersRepository } from "../../../repositories/implementations/PostgresManufacturerRepository";
import { ListManufacturerService } from "./ListManufacturerService";
import { ListManufacturerController } from "./ListManufacturerController";

const postgresManufacturerRepository = new PostgresManufacturersRepository();

const listManufacturerService = new ListManufacturerService(
  postgresManufacturerRepository
);

const listManufacturerController = new ListManufacturerController(
  listManufacturerService
);

export { listManufacturerService, listManufacturerController };
