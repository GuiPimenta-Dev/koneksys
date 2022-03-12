"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateEquipmentService_1 = require("./CreateEquipmentService");
const PostgresEquipmentRepository_1 = require("../../../repositories/implementations/PostgresEquipmentRepository");
const PostgresManufacturerRepository_1 = require("../../../repositories/implementations/PostgresManufacturerRepository");
const fc_1 = require("../../../utils/fc");
const index_test_1 = __importDefault(require("../../../db/index-test"));
describe("List Equipment", () => {
    let postgresEquipmentsRepository;
    let postgresManufacturersRepository;
    let createEquipmentService;
    let listEquipmentService;
    beforeAll(async () => {
        postgresEquipmentsRepository = new PostgresEquipmentRepository_1.PostgresEquipmentsRepository(index_test_1.default);
        postgresManufacturersRepository = new PostgresManufacturerRepository_1.PostgresManufacturersRepository(index_test_1.default);
        createEquipmentService = new CreateEquipmentService_1.CreateEquipmentService(postgresEquipmentsRepository, postgresManufacturersRepository);
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
    it("Should be able to create a new equipment", async () => {
        const dto = {
            model: "Test Equipment",
            manufacturerId: null,
        };
        const sut = await createEquipmentService.execute(dto);
        expect(sut).toHaveProperty("id");
        expect(sut).toHaveProperty("serialNumber");
        expect(sut.model).toEqual(dto.model);
        expect(sut.manufacturerId).toEqual(dto.manufacturerId);
    });
    it("Should throw an error not sending the model", async () => {
        const dto = {
            manufacturerId: null,
        };
        const sut = await createEquipmentService.execute(dto);
        expect(sut.message).toEqual("The Equipment must have a model!");
    });
});
//# sourceMappingURL=CreateEquipmentService.spec.js.map