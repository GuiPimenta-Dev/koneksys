import { PostgresEquipmentsRepository } from "../../../repositories/implementations/PostgresEquipmentRepository";
import { ListEquipmentUseCase } from "./ListEquipmentUseCase";
import { ListEquipmentController } from "./ListEquipmentController";

const postgresEquipmentsRepository = new PostgresEquipmentsRepository();

const listEquipmentUseCase = new ListEquipmentUseCase(
  postgresEquipmentsRepository
);

const listEquipmentController = new ListEquipmentController(
  listEquipmentUseCase
);

export { listEquipmentUseCase, listEquipmentController };
