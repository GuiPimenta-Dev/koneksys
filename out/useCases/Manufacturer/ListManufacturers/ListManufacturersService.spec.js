"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListManufacturersService_1 = require("./ListManufacturersService");
const CreateManufacturerService_1 = require("../CreateManufacturer/CreateManufacturerService");
const PostgresManufacturerRepository_1 = require("../../../repositories/implementations/PostgresManufacturerRepository");
const fc_1 = require("../../../utils/fc");
const index_test_1 = __importDefault(require("../../../db/index-test"));
describe("List Equipment", () => {
    let postgresManufacturerRepository;
    let listManufacturersService;
    let createManufacturerService;
    beforeAll(async () => {
        postgresManufacturerRepository = new PostgresManufacturerRepository_1.PostgresManufacturersRepository(index_test_1.default);
        listManufacturersService = new ListManufacturersService_1.ListManufacturersService(postgresManufacturerRepository);
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
//# sourceMappingURL=ListManufacturersService.spec.js.map