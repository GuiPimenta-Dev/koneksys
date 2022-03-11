import { PostgresEquipmentsRepository } from "../../../repositories/implementations/PostgresEquipmentRepository";
import { CreateEquipmentUseCase } from "./CreateEquipmentUseCase";
import { CreateEquipmentController } from "./CreateEquipmentController";

const postgresEquipmentsRepository = new PostgresEquipmentsRepository();

const createEquipmentUseCase = new CreateEquipmentUseCase(
  postgresEquipmentsRepository
);

const createEquipmentController = new CreateEquipmentController(
  createEquipmentUseCase
);

export { createEquipmentUseCase, createEquipmentController };
