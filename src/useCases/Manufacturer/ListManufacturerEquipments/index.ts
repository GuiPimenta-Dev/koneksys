import { PostgresManufacturersRepository } from "../../../repositories/implementations/PostgresManufacturerRepository";
import { ListManufacturerEquipmentsService } from "./ListManufacturerEquipmentsService";
import { ListManufacturerEquipmentsController } from "./ListManufacturerEquipmentsController";

const postgresManufacturerRepository = new PostgresManufacturersRepository();

const listManufacturerEquipmentsService = new ListManufacturerEquipmentsService(
  postgresManufacturerRepository
);

const listManufacturerEquipmentsController =
  new ListManufacturerEquipmentsController(listManufacturerEquipmentsService);

export {
  listManufacturerEquipmentsService,
  listManufacturerEquipmentsController,
};
