import { PostgresEquipmentsRepository } from "../../../repositories/implementations/PostgresEquipmentRepository";
import { ListEquipmentOwnerService } from "./ListEquipmentOwnerService";
import { ListEquipmentOwnerController } from "./ListEquipmentOwnerController";
import client from "../../../db";
const postgresEquipmentsRepository = new PostgresEquipmentsRepository(client);

const listEquipmentOwnerService = new ListEquipmentOwnerService(
  postgresEquipmentsRepository
);

const listEquipmentOwnerController = new ListEquipmentOwnerController(
  listEquipmentOwnerService
);

export { listEquipmentOwnerService, listEquipmentOwnerController };
