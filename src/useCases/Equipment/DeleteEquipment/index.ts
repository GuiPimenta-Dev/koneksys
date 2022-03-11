import { PostgresEquipmentsRepository } from "../../../repositories/implementations/PostgresEquipmentRepository";
import { DeleteEquipmentService } from "./DeleteEquipmentService";
import { DeleteEquipmentController } from "./DeleteEquipmentController";

const postgresEquipmentsRepository = new PostgresEquipmentsRepository();

const deleteEquipmentService = new DeleteEquipmentService(
  postgresEquipmentsRepository
);

const deleteEquipmentController = new DeleteEquipmentController(
  deleteEquipmentService
);

export { deleteEquipmentService, deleteEquipmentController };
