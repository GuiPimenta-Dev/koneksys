import { PostgresEquipmentsRepository } from "../../../repositories/implementations/PostgresEquipmentRepository";
import { CreateEquipmentService } from "./CreateEquipmentService";
import { CreateEquipmentController } from "./CreateEquipmentController";

const postgresEquipmentsRepository = new PostgresEquipmentsRepository();

const createEquipmentService = new CreateEquipmentService(
  postgresEquipmentsRepository
);

const createEquipmentController = new CreateEquipmentController(
  createEquipmentService
);

export { createEquipmentService, createEquipmentController };
