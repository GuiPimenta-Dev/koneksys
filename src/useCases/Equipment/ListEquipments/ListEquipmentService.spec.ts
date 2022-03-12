import { ListEquipmentsService } from "./ListEquipmentsService";
import { CreateEquipmentService } from "../CreateEquipment/CreateEquipmentService";
import { PostgresEquipmentsRepository } from "../../../repositories/implementations/PostgresEquipmentRepository";
import { PostgresManufacturersRepository } from "../../../repositories/implementations/PostgresManufacturerRepository";
import { readQuery } from "../../../utils/fc";
import client from "../../../db/index-test";

describe("List Equipments", () => {
  let postgresEquipmentsRepository;
  let postgresManufacturersRepository;
  let createEquipmentsService;
  let listEquipmentsService;

  const dto = {
    model: "Test Equipment",
    manufacturerId: null,
  };

  beforeAll(async () => {
    postgresEquipmentsRepository = new PostgresEquipmentsRepository(client);
    postgresManufacturersRepository = new PostgresManufacturersRepository(
      client
    );
    createEquipmentsService = new CreateEquipmentService(
      postgresEquipmentsRepository,
      postgresManufacturersRepository
    );
    listEquipmentsService = new ListEquipmentsService(
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

  it("Should be able to list all equipments", async () => {
    const { id: firstId, serialNumber: firstSerialNumber } =
      await createEquipmentsService.execute(dto);
    const { id: secondId, serialNumber: secondSerialNumber } =
      await createEquipmentsService.execute(dto);
    const { id: thirdId, serialNumber: thirdSerialNumber } =
      await createEquipmentsService.execute(dto);
    const sut = await listEquipmentsService.execute();
    const expectedResults = [
      {
        id: firstId,
        model: "Test Equipment",
        serialNumber: firstSerialNumber,
        manufacturerId: null,
      },
      {
        id: secondId,
        model: "Test Equipment",
        serialNumber: secondSerialNumber,
        manufacturerId: null,
      },
      {
        id: thirdId,
        model: "Test Equipment",
        serialNumber: thirdSerialNumber,
        manufacturerId: null,
      },
    ];
    expect(sut).toEqual(expectedResults);
  });

  it("Should be able to show an empty list when the are no values", async () => {
    const sut = await listEquipmentsService.execute();
    expect(sut).toEqual([]);
  });
});
