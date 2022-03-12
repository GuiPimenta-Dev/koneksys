import { PostgresManufacturersRepository } from "../../../repositories/implementations/PostgresManufacturerRepository";
import { CreateManufacturerService } from "./CreateManufacturerService";
import { CreateManufacturerController } from "./CreateManufacturerController";
import client from "../../../db";

const postgresManufacturersRepository = new PostgresManufacturersRepository(
  client
);

const createManufacturerService = new CreateManufacturerService(
  postgresManufacturersRepository
);

const createManufacturerController = new CreateManufacturerController(
  createManufacturerService
);

export { createManufacturerService, createManufacturerController };
