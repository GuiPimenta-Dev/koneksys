import { CreateEquipmentService } from "./CreateEquipmentService";
import { PostgresEquipmentsRepository } from "../../../repositories/implementations/PostgresEquipmentRepository";
import { PostgresManufacturersRepository } from "../../../repositories/implementations/PostgresManufacturerRepository";
import { readQuery } from "../../../utils/fc";

import client from "../../../db/index-test";

describe("List Equipment", () => {
  let postgresEquipmentsRepository;
  let postgresManufacturersRepository;
  let createEquipmentService;
  let listEquipmentService;

  beforeAll(async () => {
    postgresEquipmentsRepository = new PostgresEquipmentsRepository(client);
    postgresManufacturersRepository = new PostgresManufacturersRepository(
      client
    );
    createEquipmentService = new CreateEquipmentService(
      postgresEquipmentsRepository,
      postgresManufacturersRepository
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

  it("Should be able to create a new equipment", async () => {
    const dto = {
      model: "Test Equipment",
      manufacturerId: null,
    };

    const sut = await createEquipmentService.execute(dto);

    expect(sut).toHaveProperty("id");
    expect(sut).toHaveProperty("serialNumber");
    expect(sut.model).toEqual(dto.model);
    expect(sut.manufacturerId).toEqual(dto.manufacturerId);
  });

  it("Should throw an error not sending the model", async () => {
    const dto = {
      manufacturerId: null,
    };
    const sut = await createEquipmentService.execute(dto);

    expect(sut.message).toEqual("The Equipment must have a model!");
  });
});
