import { ListManufacturersService } from "./ListManufacturersService";
import { CreateManufacturerService } from "../CreateManufacturer/CreateManufacturerService";
import { PostgresManufacturersRepository } from "../../../repositories/implementations/PostgresManufacturerRepository";
import { readQuery } from "../../../utils/fc";

import client from "../../../db/index-test";

describe("List Equipment", () => {
  let postgresManufacturerRepository;
  let listManufacturersService;
  let createManufacturerService;

  beforeAll(async () => {
    postgresManufacturerRepository = new PostgresManufacturersRepository(
      client
    );

    listManufacturersService = new ListManufacturersService(
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
    const { id: firstId } = await createManufacturerService.execute({
      name: "First Manufacturer",
    });
    const { id: secondId } = await createManufacturerService.execute({
      name: "Second Manufacturer",
    });

    const { id: thirdId } = await createManufacturerService.execute({
      name: "Third Manufacturer",
    });
    const sut = await listManufacturersService.execute();

    const expectedResults = [
      {
        id: firstId,
        name: "First Manufacturer",
      },
      {
        id: secondId,
        name: "Second Manufacturer",
      },
      {
        id: thirdId,
        name: "Third Manufacturer",
      },
    ];

    expect(sut).toEqual(expectedResults);
  });
});
