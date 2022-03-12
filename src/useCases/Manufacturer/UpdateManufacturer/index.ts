import { PostgresManufacturersRepository } from "../../../repositories/implementations/PostgresManufacturerRepository";
import { UpdateManufacturerService } from "./UpdateManufacturerService";
import { UpdateManufacturerController } from "./UpdateManufacturerController";
import client from "../../../db";

const postgresManufacturersRepository = new PostgresManufacturersRepository(
  client
);

const updateManufacturerService = new UpdateManufacturerService(
  postgresManufacturersRepository
);

const updateManufacturerController = new UpdateManufacturerController(
  updateManufacturerService
);

export { updateManufacturerService, updateManufacturerController };
