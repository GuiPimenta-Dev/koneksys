import { PostgresManufacturersRepository } from "../../../repositories/implementations/PostgresManufacturerRepository";
import { DeleteManufacturerService } from "./DeleteManufacturerService";
import { DeleteManufacturerController } from "./DeleteManufacturerController";
import client from "../../../db";
const postgresManufacturersRepository = new PostgresManufacturersRepository(
  client
);

const deleteManufacturerService = new DeleteManufacturerService(
  postgresManufacturersRepository
);

const deleteManufacturerController = new DeleteManufacturerController(
  deleteManufacturerService
);

export { deleteManufacturerService, deleteManufacturerController };
