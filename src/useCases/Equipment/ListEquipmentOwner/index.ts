import { PostgresEquipmentsRepository } from "../../../repositories/implementations/PostgresEquipmentRepository";
import { ListEquipmentOwnerService } from "./ListEquipmentOwnerService";
import { ListEquipmentOwnerController } from "./ListEquipmentOwnerController";

const postgresEquipmentsRepository = new PostgresEquipmentsRepository();

const listEquipmentOwnerService = new ListEquipmentOwnerService(
  postgresEquipmentsRepository
);

const listEquipmentOwnerController = new ListEquipmentOwnerController(
  listEquipmentOwnerService
);

export { listEquipmentOwnerService, listEquipmentOwnerController };
