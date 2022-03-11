import { PostgresManufacturersRepository } from "../../../repositories/implementations/PostgresManufacturerRepository";
import { DeleteManufacturerService } from "./DeleteManufacturerService";
import { DeleteManufacturerController } from "./DeleteManufacturerController";

const postgresManufacturersRepository = new PostgresManufacturersRepository();

const deleteManufacturerService = new DeleteManufacturerService(
  postgresManufacturersRepository
);

const deleteManufacturerController = new DeleteManufacturerController(
  deleteManufacturerService
);

export { deleteManufacturerService, deleteManufacturerController };
