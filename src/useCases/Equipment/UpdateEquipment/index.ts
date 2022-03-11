import { PostgresEquipmentsRepository } from "../../../repositories/implementations/PostgresEquipmentRepository";
import { UpdateEquipmentService } from "./UpdateEquipmentService";
import { UpdateEquipmentController } from "./UpdateEquipmentController";
import { PostgresManufacturersRepository } from "../../../repositories/implementations/PostgresManufacturerRepository";

const postgresEquipmentsRepository = new PostgresEquipmentsRepository();
const postgresManufacturersRepository = new PostgresManufacturersRepository();

const updateEquipmentService = new UpdateEquipmentService(
  postgresEquipmentsRepository,
  postgresManufacturersRepository
);

const updateEquipmentController = new UpdateEquipmentController(
  updateEquipmentService
);

export { updateEquipmentService, updateEquipmentController };
