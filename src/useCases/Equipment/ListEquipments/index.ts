import { PostgresEquipmentsRepository } from "../../../repositories/implementations/PostgresEquipmentRepository";
import { ListEquipmentsService } from "./ListEquipmentsService";
import { ListEquipmentsController } from "./ListEquipmentsController";

const postgresEquipmentsRepository = new PostgresEquipmentsRepository();

const listEquipmentsService = new ListEquipmentsService(
  postgresEquipmentsRepository
);

const listEquipmentsController = new ListEquipmentsController(
  listEquipmentsService
);

export { listEquipmentsService, listEquipmentsController };
