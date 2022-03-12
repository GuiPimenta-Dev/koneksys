import { UpdateEquipmentService } from "./UpdateEquipmentService";
import { CreateEquipmentService } from "../CreateEquipment/CreateEquipmentService";
import { CreateManufacturerService } from "../../Manufacturer/CreateManufacturer/CreateManufacturerService";
import { PostgresEquipmentsRepository } from "../../../repositories/implementations/PostgresEquipmentRepository";
import { PostgresManufacturersRepository } from "../../../repositories/implementations/PostgresManufacturerRepository";
import { readQuery } from "../../../utils/fc";
import client from "../../../db/index-test";

describe("Update Equipments", () => {
  let postgresEquipmentsRepository;
  let postgresManufacturersRepository;
  let createManufacturerService;
  let createEquipmentsService;
  let updateEquipmentService;
  const dto = {
    model: "Test Equipment",
    manufacturerId: null,
  };

  beforeAll(async () => {
    postgresEquipmentsRepository = new PostgresEquipmentsRepository(client);
    postgresManufacturersRepository = new PostgresManufacturersRepository(
      client
    );
    createManufacturerService = new CreateManufacturerService(
      postgresManufacturersRepository
    );
    createEquipmentsService = new CreateEquipmentService(
      postgresEquipmentsRepository,
      postgresManufacturersRepository
    );
    updateEquipmentService = new UpdateEquipmentService(
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

  it("Should be able to Update an equipment", async () => {
    const { id } = await createEquipmentsService.execute(dto);

    const updatedDTO = {
      id,
      model: "Updated Equipment",
      serialNumber: "New Serial Number",
      manufacturerId: null,
    };

    const sut = await updateEquipmentService.execute(updatedDTO);
    expect(sut).toEqual(updatedDTO);
  });

  it("Should throw an error if manufacturerId is missing", async () => {
    const dto = {
      model: "Test Equipment",
    };
    const sut = await updateEquipmentService.execute(dto);
    expect(sut.message).toEqual("You need to send the manufacturerId!");
  });

  it("Should be able to be related to another manufacturer", async () => {
    const manufacturerDTO = {
      name: "Test Manufacturer",
    };
    const { id: manufacturerId } = await createManufacturerService.execute(
      manufacturerDTO
    );

    const { id, serialNumber } = await createEquipmentsService.execute(dto);
    const updatedDTO = {
      id,
      manufacturerId: manufacturerId,
    };
    const sut = await updateEquipmentService.execute(updatedDTO);
    expect(sut.manufacturerId).toEqual(manufacturerId);
    expect(sut.serialNumber).toEqual(serialNumber);
    expect(sut.model).toEqual(dto.model);
  });

  it("Should return an error when there is no manufacturer", async () => {
    const { id } = await createEquipmentsService.execute(dto);
    const updatedDTO = {
      id,
      manufacturerId: "fake manufacturer id",
    };
    const sut = await updateEquipmentService.execute(updatedDTO);
    expect(sut.message).toEqual("This Manufacturer does not exists!");
  });
});
