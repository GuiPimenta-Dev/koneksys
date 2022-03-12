import { CreateManufacturerService } from "./CreateManufacturerService";
import { PostgresManufacturersRepository } from "../../../repositories/implementations/PostgresManufacturerRepository";
import { readQuery } from "../../../utils/fc";

import client from "../../../db/index-test";

describe("List Equipment", () => {
  let postgresManufacturerRepository;
  let createManufacturerService;

  beforeAll(async () => {
    postgresManufacturerRepository = new PostgresManufacturersRepository(
      client
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

  it("Should be able to create a new manufacturer", async () => {
    const dto = {
      name: "Test Manufacturer",
    };
    const sut = await createManufacturerService.execute(dto);

    expect(sut).toHaveProperty("id");
    expect(sut).toHaveProperty("name");
  });

  it("Should throw an error if there is no manufacturers name", async () => {
    const sut = await createManufacturerService.execute();
    expect(sut.message).toEqual("You need to send the manufacturer`s name!");
  });
});
