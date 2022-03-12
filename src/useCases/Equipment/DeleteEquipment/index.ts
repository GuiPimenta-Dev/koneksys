import { PostgresEquipmentsRepository } from "../../../repositories/implementations/PostgresEquipmentRepository";
import { DeleteEquipmentService } from "./DeleteEquipmentService";
import { DeleteEquipmentController } from "./DeleteEquipmentController";
import client from "../../../db";

const postgresEquipmentsRepository = new PostgresEquipmentsRepository(client);

const deleteEquipmentService = new DeleteEquipmentService(
  postgresEquipmentsRepository
);

const deleteEquipmentController = new DeleteEquipmentController(
  deleteEquipmentService
);

export { deleteEquipmentService, deleteEquipmentController };
