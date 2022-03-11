import { PostgresEquipmentsRepository } from "../../../repositories/implementations/PostgresEquipmentRepository";
import { UpdateEquipmentUseCase } from "./UpdateEquipmentUseCase";
import { UpdateEquipmentController } from "./UpdateEquipmentController";

const postgresEquipmentsRepository = new PostgresEquipmentsRepository();

const updateEquipmentUseCase = new UpdateEquipmentUseCase(
  postgresEquipmentsRepository
);

const updateEquipmentController = new UpdateEquipmentController(
  updateEquipmentUseCase
);

export { updateEquipmentUseCase, updateEquipmentController };
