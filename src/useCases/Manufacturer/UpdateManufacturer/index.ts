import { PostgresManufacturersRepository } from "../../../repositories/implementations/PostgresManufacturerRepository";
import { UpdateManufacturerService } from "./UpdateManufacturerService";
import { UpdateManufacturerController } from "./UpdateManufacturerController";

const postgresManufacturersRepository = new PostgresManufacturersRepository();

const updateManufacturerService = new UpdateManufacturerService(
  postgresManufacturersRepository
);

const updateManufacturerController = new UpdateManufacturerController(
  updateManufacturerService
);

export { updateManufacturerService, updateManufacturerController };
