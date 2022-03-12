import { ListEquipmentService } from "./ListEquipmentService";
import { CreateEquipmentService } from "../CreateEquipment/CreateEquipmentService";
import { PostgresEquipmentsRepository } from "../../../repositories/implementations/PostgresEquipmentRepository";
import { PostgresManufacturersRepository } from "../../../repositories/implementations/PostgresManufacturerRepository";

import { readQuery } from "../../../utils/fc";

import client from "../../../db/index-test";

describe("List Equipment", () => {
  let postgresEquipmentsRepository;
  let postgresManufacturersRepository;
  let createEquipmentService;
  let listEquipmentService;

  const dto = {
    model: "Test Equipment",
    manufacturerId: null,
  };

  beforeAll(async () => {
    postgresEquipmentsRepository = new PostgresEquipmentsRepository(client);
    postgresManufacturersRepository = new PostgresManufacturersRepository(
      client
    );
    createEquipmentService = new CreateEquipmentService(
      postgresEquipmentsRepository,
      postgresManufacturersRepository
    );
    listEquipmentService = new ListEquipmentService(
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

  it("Should be able to list an equipment", async () => {
    const { id, serialNumber } = await createEquipmentService.execute(dto);
    const sut = await listEquipmentService.execute(id);
    expect(sut.id).toEqual(id);
    expect(sut.serialNumber).toEqual(serialNumber);
    expect(sut.model).toEqual(dto.model);
    expect(sut.manufacturerId).toEqual(dto.manufacturerId);
  });

  it("Should throw an error not sending the model", async () => {
    const sut = await listEquipmentService.execute(dto);
    expect(sut.message).toEqual("This Equipment does not exists!");
  });
});
