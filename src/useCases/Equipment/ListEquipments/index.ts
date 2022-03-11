import { PostgresEquipmentsRepository } from "../../../repositories/implementations/PostgresEquipmentRepository";
import { ListEquipmentsUseCase } from "./ListEquipmentsUseCase";
import { ListEquipmentsController } from "./ListEquipmentsController";

const postgresEquipmentsRepository = new PostgresEquipmentsRepository();

const listEquipmentsUseCase = new ListEquipmentsUseCase(
  postgresEquipmentsRepository
);

const listEquipmentsController = new ListEquipmentsController(
  listEquipmentsUseCase
);

export { listEquipmentsUseCase, listEquipmentsController };
