"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateManufacturerService_1 = require("./CreateManufacturerService");
const PostgresManufacturerRepository_1 = require("../../../repositories/implementations/PostgresManufacturerRepository");
const fc_1 = require("../../../utils/fc");
const index_test_1 = __importDefault(require("../../../db/index-test"));
describe("List Equipment", () => {
    let postgresManufacturerRepository;
    let createManufacturerService;
    beforeAll(async () => {
        postgresManufacturerRepository = new PostgresManufacturerRepository_1.PostgresManufacturersRepository(index_test_1.default);
        createManufacturerService = new CreateManufacturerService_1.CreateManufacturerService(postgresManufacturerRepository);
    });
    beforeEach(async () => {
        await index_test_1.default.query(fc_1.readQuery("createTables"));
    });
    afterEach(async () => {
        await index_test_1.default.query(fc_1.readQuery("dropTables"));
    });
    afterAll(() => {
        index_test_1.default.end();
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
//# sourceMappingURL=CreateManufacturerService.spec.js.map