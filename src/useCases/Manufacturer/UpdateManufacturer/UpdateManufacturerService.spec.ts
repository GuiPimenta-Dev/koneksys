import { UpdateManufacturerService } from "./UpdateManufacturerService";
import { CreateManufacturerService } from "../CreateManufacturer/CreateManufacturerService";
import { PostgresManufacturersRepository } from "../../../repositories/implementations/PostgresManufacturerRepository";
import { readQuery } from "../../../utils/fc";

import client from "../../../db/index-test";

describe("Update Equipment", () => {
  let postgresManufacturerRepository;
  let updateManufacturerService;
  let createManufacturerService;

  beforeAll(async () => {
    postgresManufacturerRepository = new PostgresManufacturersRepository(
      client
    );

    updateManufacturerService = new UpdateManufacturerService(
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

  it("Should be able to update a manufacturer name", async () => {
    const { id } = await createManufacturerService.execute({
      name: "Manufacturer",
    });
    const dto = {
      id: id,
      name: "Updated Manufacturer",
    };
    const sut = await updateManufacturerService.execute(dto);
    expect(sut.name).toEqual(dto.name);
  });

  it("Should throw an error if there is no manufacturers name", async () => {
    const sut = await updateManufacturerService.execute("123123");
    expect(sut.message).toEqual("This Manufacturer does not exists!");
  });
});
