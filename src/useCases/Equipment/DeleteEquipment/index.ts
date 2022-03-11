import { PostgresEquipmentsRepository } from "../../../repositories/implementations/PostgresEquipmentRepository";
import { DeleteEquipmentUseCase } from "./DeleteEquipmentUseCase";
import { DeleteEquipmentController } from "./DeleteEquipmentController";

const postgresEquipmentsRepository = new PostgresEquipmentsRepository();

const deleteEquipmentUseCase = new DeleteEquipmentUseCase(
  postgresEquipmentsRepository
);

const deleteEquipmentController = new DeleteEquipmentController(
  deleteEquipmentUseCase
);

export { deleteEquipmentUseCase, deleteEquipmentController };
