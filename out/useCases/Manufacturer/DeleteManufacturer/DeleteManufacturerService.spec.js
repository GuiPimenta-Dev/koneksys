"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DeleteManufacturerService_1 = require("./DeleteManufacturerService");
const CreateManufacturerService_1 = require("../CreateManufacturer/CreateManufacturerService");
const PostgresManufacturerRepository_1 = require("../../../repositories/implementations/PostgresManufacturerRepository");
const fc_1 = require("../../../utils/fc");
const index_test_1 = __importDefault(require("../../../db/index-test"));
describe("List Equipment", () => {
    let postgresManufacturerRepository;
    let deleteManufacturerService;
    let createManufacturerService;
    beforeAll(async () => {
        postgresManufacturerRepository = new PostgresManufacturerRepository_1.PostgresManufacturersRepository(index_test_1.default);
        deleteManufacturerService = new DeleteManufacturerService_1.DeleteManufacturerService(postgresManufacturerRepository);
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
//# sourceMappingURL=DeleteManufacturerService.spec.js.map