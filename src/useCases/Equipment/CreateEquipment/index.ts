import { PostgresEquipmentsRepository } from "../../../repositories/implementations/PostgresEquipmentRepository";
import { PostgresManufacturersRepository } from "../../../repositories/implementations/PostgresManufacturerRepository";
import { CreateEquipmentService } from "./CreateEquipmentService";
import { CreateEquipmentController } from "./CreateEquipmentController";
import client from "../../../db";

const postgresEquipmentsRepository = new PostgresEquipmentsRepository(client);
const postgresManufacturersRepository = new PostgresManufacturersRepository(
  client
);

const createEquipmentService = new CreateEquipmentService(
  postgresEquipmentsRepository,
  postgresManufacturersRepository
);

const createEquipmentController = new CreateEquipmentController(
  createEquipmentService
);

export { createEquipmentService, createEquipmentController };
