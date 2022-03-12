import { DeleteManufacturerService } from "./DeleteManufacturerService";
import { CreateManufacturerService } from "../CreateManufacturer/CreateManufacturerService";
import { PostgresManufacturersRepository } from "../../../repositories/implementations/PostgresManufacturerRepository";
import { readQuery } from "../../../utils/fc";

import client from "../../../db/index-test";

describe("List Equipment", () => {
  let postgresManufacturerRepository;
  let deleteManufacturerService;
  let createManufacturerService;

  beforeAll(async () => {
    postgresManufacturerRepository = new PostgresManufacturersRepository(
      client
    );

    deleteManufacturerService = new DeleteManufacturerService(
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

  it("Should be able to delete a manufacturer", async () => {
    const dto = {
      name: "Test Manufacturer",
    };
    const manufacturer = await createManufacturerService.execute(dto);
    const sut = await deleteManufacturerService.execute(manufacturer.id);

    expect(sut).toEqual(undefined);
  });

  it("Should throw an error if there is no manufacturers name", async () => {
    const sut = await deleteManufacturerService.execute("123123");
    expect(sut.message).toEqual("This Manufacturer does not exists!");
  });
});
