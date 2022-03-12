"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListEquipmentService_1 = require("./ListEquipmentService");
const CreateEquipmentService_1 = require("../CreateEquipment/CreateEquipmentService");
const PostgresEquipmentRepository_1 = require("../../../repositories/implementations/PostgresEquipmentRepository");
const PostgresManufacturerRepository_1 = require("../../../repositories/implementations/PostgresManufacturerRepository");
const fc_1 = require("../../../utils/fc");
const index_test_1 = __importDefault(require("../../../db/index-test"));
describe("List Equipment", () => {
    let postgresEquipmentsRepository;
    let postgresManufacturersRepository;
    let createEquipmentService;
    let listEquipmentService;
    const dto = {
        model: "Test Equipment",
        manufacturerId: null,
    };
    beforeAll(async () => {
        postgresEquipmentsRepository = new PostgresEquipmentRepository_1.PostgresEquipmentsRepository(index_test_1.default);
        postgresManufacturersRepository = new PostgresManufacturerRepository_1.PostgresManufacturersRepository(index_test_1.default);
        createEquipmentService = new CreateEquipmentService_1.CreateEquipmentService(postgresEquipmentsRepository, postgresManufacturersRepository);
        listEquipmentService = new ListEquipmentService_1.ListEquipmentService(postgresEquipmentsRepository);
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
    it("Should be able to list an equipment", async () => {
        const { id, serialNumber } = await createEquipmentService.execute(dto);
        const sut = await listEquipmentService.execute(id);
        expect(sut.id).toEqual(id);
        expect(sut.serialNumber).toEqual(serialNumber);
        expect(sut.model).toEqual(dto.model);
        expect(sut.manufacturerId).toEqual(dto.manufacturerId);
    });
    it("Should throw an error not sending the model", async () => {
        const sut = await listEquipmentService.execute(dto);
        expect(sut.message).toEqual("This Equipment does not exists!");
    });
});
//# sourceMappingURL=ListEquipmentService.spec.js.map