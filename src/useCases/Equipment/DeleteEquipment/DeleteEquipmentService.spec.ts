import { DeleteEquipmentService } from "./DeleteEquipmentService";
import { CreateEquipmentService } from "../CreateEquipment/CreateEquipmentService";
import { PostgresEquipmentsRepository } from "../../../repositories/implementations/PostgresEquipmentRepository";
import { PostgresManufacturersRepository } from "../../../repositories/implementations/PostgresManufacturerRepository";
import { readQuery } from "../../../utils/fc";

import client from "../../../db/index-test";

describe("List Equipment", () => {
  let postgresEquipmentsRepository;
  let postgresManufacturersRepository;
  let createEquipmentService;
  let deleteEquipmentService;

  beforeAll(async () => {
    postgresEquipmentsRepository = new PostgresEquipmentsRepository(client);
    postgresManufacturersRepository = new PostgresManufacturersRepository(
      client
    );
    createEquipmentService = new CreateEquipmentService(
      postgresEquipmentsRepository,
      postgresManufacturersRepository
    );
    deleteEquipmentService = new DeleteEquipmentService(
      postgresEquipmentsRepository
    );
  });

  beforeEach(async () => {
    await client.query(readQuery("createTables"));
  });
  afterEach(async () => {
    await client.query(readQuery("dropTables"));
  });

  afterAll(() => {
    client.end();
  });

  it("Should be able to create to delete an existing equipment", async () => {
    const dto = {
      model: "Test Equipment",
      manufacturerId: null,
    };

    const { id } = await createEquipmentService.execute(dto);
    const sut = await deleteEquipmentService.execute(id);

    expect(sut).toBe(undefined);
  });

  it("Should throw an error when equipment does not exists", async () => {
    const id = "d7972f47-5124-459b-812b-dba228743129";

    const sut = await deleteEquipmentService.execute(id);
    expect(sut.message).toEqual("This Equipment does not exists!");
  });
});
