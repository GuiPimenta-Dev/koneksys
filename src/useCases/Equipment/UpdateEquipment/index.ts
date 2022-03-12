import { PostgresEquipmentsRepository } from "../../../repositories/implementations/PostgresEquipmentRepository";
import { UpdateEquipmentService } from "./UpdateEquipmentService";
import { UpdateEquipmentController } from "./UpdateEquipmentController";
import { PostgresManufacturersRepository } from "../../../repositories/implementations/PostgresManufacturerRepository";
import client from "../../../db";

const postgresEquipmentsRepository = new PostgresEquipmentsRepository(client);
const postgresManufacturersRepository = new PostgresManufacturersRepository(
  client
);

const updateEquipmentService = new UpdateEquipmentService(
  postgresEquipmentsRepository,
  postgresManufacturersRepository
);

const updateEquipmentController = new UpdateEquipmentController(
  updateEquipmentService
);

export { updateEquipmentService, updateEquipmentController };
