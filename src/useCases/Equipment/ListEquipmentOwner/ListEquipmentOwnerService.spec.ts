import { CreateManufacturerService } from "../../Manufacturer/CreateManufacturer/CreateManufacturerService";
import { ListEquipmentOwnerService } from "./ListEquipmentOwnerService";
import { CreateEquipmentService } from "../CreateEquipment/CreateEquipmentService";
import { PostgresEquipmentsRepository } from "../../../repositories/implementations/PostgresEquipmentRepository";
import { PostgresManufacturersRepository } from "../../../repositories/implementations/PostgresManufacturerRepository";
import { readQuery } from "../../../utils/fc";

import client from "../../../db/index-test";

describe("List Equipment", () => {
  let postgresEquipmentsRepository;
  let postgresManufacturerRepository;
  let createEquipmentService;
  let listEquipmentOwnerService;
  let createManufacturerService;

  beforeAll(async () => {
    postgresEquipmentsRepository = new PostgresEquipmentsRepository(client);
    postgresManufacturerRepository = new PostgresManufacturersRepository(
      client
    );
    createEquipmentService = new CreateEquipmentService(
      postgresEquipmentsRepository,
      postgresManufacturerRepository
    );
    listEquipmentOwnerService = new ListEquipmentOwnerService(
      postgresEquipmentsRepository
    );
    createManufacturerService = new CreateManufacturerService(
      postgresManufacturerRepository
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

  it("Should be able to list the equipment`s owner", async () => {
    const manufacturerDTO = {
      name: "Test Equipment",
    };
    const { id: manufacturerId, name } =
      await createManufacturerService.execute(manufacturerDTO);

    const equipmentDTO = {
      model: "Test Equipment",
      manufacturerId,
    };
    const { id: equipmentId } = await createEquipmentService.execute(
      equipmentDTO
    );
    const sut = await listEquipmentOwnerService.execute(equipmentId);
    expect(sut.id).toEqual(manufacturerId);
    expect(sut.name).toEqual(name);
  });

  it("Should throw an error if there is no Equipment", async () => {
    const id = "31a113dd-1486-4b75-a392-1b0c3ef37756";
    const sut = await listEquipmentOwnerService.execute(id);
    expect(sut.message).toEqual("This Equipment does not exists!");
  });
});
