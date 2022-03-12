"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListManufacturerService_1 = require("./ListManufacturerService");
const CreateManufacturerService_1 = require("../CreateManufacturer/CreateManufacturerService");
const PostgresManufacturerRepository_1 = require("../../../repositories/implementations/PostgresManufacturerRepository");
const fc_1 = require("../../../utils/fc");
const index_test_1 = __importDefault(require("../../../db/index-test"));
describe("List Equipment", () => {
    let postgresManufacturerRepository;
    let listManufacturerService;
    let createManufacturerService;
    beforeAll(async () => {
        postgresManufacturerRepository = new PostgresManufacturerRepository_1.PostgresManufacturersRepository(index_test_1.default);
        listManufacturerService = new ListManufacturerService_1.ListManufacturerService(postgresManufacturerRepository);
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
//# sourceMappingURL=ListManufacturerService.spec.js.map