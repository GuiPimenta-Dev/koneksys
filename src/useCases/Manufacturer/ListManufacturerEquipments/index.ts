import { PostgresManufacturersRepository } from "../../../repositories/implementations/PostgresManufacturerRepository";
import { ListManufacturerEquipmentsService } from "./ListManufacturerEquipmentsService";
import { ListManufacturerEquipmentsController } from "./ListManufacturerEquipmentsController";
import client from "../../../db";

const postgresManufacturerRepository = new PostgresManufacturersRepository(
  client
);

const listManufacturerEquipmentsService = new ListManufacturerEquipmentsService(
  postgresManufacturerRepository
);

const listManufacturerEquipmentsController =
  new ListManufacturerEquipmentsController(listManufacturerEquipmentsService);

export {
  listManufacturerEquipmentsService,
  listManufacturerEquipmentsController,
};
