import { ListManufacturerService } from "./ListManufacturerService";
import { CreateManufacturerService } from "../CreateManufacturer/CreateManufacturerService";
import { PostgresManufacturersRepository } from "../../../repositories/implementations/PostgresManufacturerRepository";
import { readQuery } from "../../../utils/fc";

import client from "../../../db/index-test";

describe("List Equipment", () => {
  let postgresManufacturerRepository;
  let listManufacturerService;
  let createManufacturerService;

  beforeAll(async () => {
    postgresManufacturerRepository = new PostgresManufacturersRepository(
      client
    );

    listManufacturerService = new ListManufacturerService(
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

  it("Should be able to list a manufacturer", async () => {
    const dto = {
      name: "Test Manufacturer",
    };
    const { id } = await createManufacturerService.execute(dto);
    const sut = await listManufacturerService.execute(id);

    expect(sut.id).toEqual(id);
    expect(sut.name).toEqual(dto.name);
  });

  it("Should throw an error if there is no manufacturers name", async () => {
    const sut = await listManufacturerService.execute("123123");
    expect(sut.message).toEqual("This Manufacturer does not exists!");
  });
});
