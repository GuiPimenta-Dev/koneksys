import { PostgresEquipmentsRepository } from "../../../repositories/implementations/PostgresEquipmentRepository";
import { ListEquipmentService } from "./ListEquipmentService";
import { ListEquipmentController } from "./ListEquipmentController";
import client from "../../../db";

const postgresEquipmentsRepository = new PostgresEquipmentsRepository(client);

const listEquipmentService = new ListEquipmentService(
  postgresEquipmentsRepository
);

const listEquipmentController = new ListEquipmentController(
  listEquipmentService
);

export { listEquipmentService, listEquipmentController };
