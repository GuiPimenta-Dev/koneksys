import { PostgresManufacturersRepository } from "../../../repositories/implementations/PostgresManufacturerRepository";
import { DeleteManufacturerUseCase } from "./DeleteManufacturerUseCase";
import { DeleteManufacturerController } from "./DeleteManufacturerController";

const postgresManufacturersRepository = new PostgresManufacturersRepository();

const deleteManufacturerUseCase = new DeleteManufacturerUseCase(
  postgresManufacturersRepository
);

const deleteManufacturerController = new DeleteManufacturerController(
  deleteManufacturerUseCase
);

export { deleteManufacturerUseCase, deleteManufacturerController };
