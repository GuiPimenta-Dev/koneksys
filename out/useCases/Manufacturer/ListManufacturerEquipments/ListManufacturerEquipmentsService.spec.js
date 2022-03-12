"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListManufacturerEquipmentsService_1 = require("./ListManufacturerEquipmentsService");
const CreateManufacturerService_1 = require("../CreateManufacturer/CreateManufacturerService");
const PostgresManufacturerRepository_1 = require("../../../repositories/implementations/PostgresManufacturerRepository");
const fc_1 = require("../../../utils/fc");
const index_test_1 = __importDefault(require("../../../db/index-test"));
describe("List Equipment", () => {
    let postgresManufacturerRepository;
    let listManufacturerEquipmentsService;
    let createManufacturerService;
    beforeAll(async () => {
        postgresManufacturerRepository = new PostgresManufacturerRepository_1.PostgresManufacturersRepository(index_test_1.default);
        listManufacturerEquipmentsService = new ListManufacturerEquipmentsService_1.ListManufacturerEquipmentsService(postgresManufacturerRepository);
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
//# sourceMappingURL=ListManufacturerEquipmentsService.spec.js.map