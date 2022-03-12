import { ListManufacturerEquipmentsService } from "./ListManufacturerEquipmentsService";
import { CreateManufacturerService } from "../CreateManufacturer/CreateManufacturerService";
import { PostgresManufacturersRepository } from "../../../repositories/implementations/PostgresManufacturerRepository";
import { readQuery } from "../../../utils/fc";

import client from "../../../db/index-test";

describe("List Equipment", () => {
  let postgresManufacturerRepository;
  let listManufacturerEquipmentsService;
  let createManufacturerService;

  beforeAll(async () => {
    postgresManufacturerRepository = new PostgresManufacturersRepository(
      client
    );

    listManufacturerEquipmentsService = new ListManufacturerEquipmentsService(
      postgresManufacturerRepository
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

  it("Should be able to list all manufacturers", async () => {
    const { id } = await createManufacturerService.execute({
      name: "First Manufacturer",
    });

    const sut = await listManufacturerEquipmentsService.execute(id);

    expect(sut).toEqual([]);
  });

  it("Should throw an error if there is no manufacturers name", async () => {
    const sut = await listManufacturerEquipmentsService.execute("123123");
    expect(sut.message).toEqual("This Manufacturer does not exists!");
  });
});
