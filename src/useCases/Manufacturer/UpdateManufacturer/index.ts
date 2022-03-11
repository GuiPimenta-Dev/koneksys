import { PostgresManufacturersRepository } from "../../../repositories/implementations/PostgresManufacturerRepository";
import { UpdateManufacturerUseCase } from "./UpdateManufacturerUseCase";
import { UpdateManufacturerController } from "./UpdateManufacturerController";

const postgresManufacturersRepository = new PostgresManufacturersRepository();

const updateManufacturerUseCase = new UpdateManufacturerUseCase(
  postgresManufacturersRepository
);

const updateManufacturerController = new UpdateManufacturerController(
  updateManufacturerUseCase
);

export { updateManufacturerUseCase, updateManufacturerController };
