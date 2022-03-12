import { PostgresEquipmentsRepository } from "../../../repositories/implementations/PostgresEquipmentRepository";
import { ListEquipmentsService } from "./ListEquipmentsService";
import { ListEquipmentsController } from "./ListEquipmentsController";
import client from "../../../db";

const postgresEquipmentsRepository = new PostgresEquipmentsRepository(client);

const listEquipmentsService = new ListEquipmentsService(
  postgresEquipmentsRepository
);

const listEquipmentsController = new ListEquipmentsController(
  listEquipmentsService
);

export { listEquipmentsService, listEquipmentsController };
