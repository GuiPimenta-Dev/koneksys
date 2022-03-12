"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UpdateManufacturerService_1 = require("./UpdateManufacturerService");
const CreateManufacturerService_1 = require("../CreateManufacturer/CreateManufacturerService");
const PostgresManufacturerRepository_1 = require("../../../repositories/implementations/PostgresManufacturerRepository");
const fc_1 = require("../../../utils/fc");
const index_test_1 = __importDefault(require("../../../db/index-test"));
describe("Update Equipment", () => {
    let postgresManufacturerRepository;
    let updateManufacturerService;
    let createManufacturerService;
    beforeAll(async () => {
        postgresManufacturerRepository = new PostgresManufacturerRepository_1.PostgresManufacturersRepository(index_test_1.default);
        updateManufacturerService = new UpdateManufacturerService_1.UpdateManufacturerService(postgresManufacturerRepository);
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
//# sourceMappingURL=UpdateManufacturerService.spec.js.map