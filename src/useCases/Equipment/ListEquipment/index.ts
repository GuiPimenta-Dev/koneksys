import { PostgresEquipmentsRepository } from "../../../repositories/implementations/PostgresEquipmentRepository";
import { ListEquipmentService } from "./ListEquipmentService";
import { ListEquipmentController } from "./ListEquipmentController";

const postgresEquipmentsRepository = new PostgresEquipmentsRepository();

const listEquipmentService = new ListEquipmentService(
  postgresEquipmentsRepository
);

const listEquipmentController = new ListEquipmentController(
  listEquipmentService
);

export { listEquipmentService, listEquipmentController };
