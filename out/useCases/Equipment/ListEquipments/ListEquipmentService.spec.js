"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListEquipmentsService_1 = require("./ListEquipmentsService");
const CreateEquipmentService_1 = require("../CreateEquipment/CreateEquipmentService");
const PostgresEquipmentRepository_1 = require("../../../repositories/implementations/PostgresEquipmentRepository");
const PostgresManufacturerRepository_1 = require("../../../repositories/implementations/PostgresManufacturerRepository");
const fc_1 = require("../../../utils/fc");
const index_test_1 = __importDefault(require("../../../db/index-test"));
describe("List Equipments", () => {
    let postgresEquipmentsRepository;
    let postgresManufacturersRepository;
    let createEquipmentsService;
    let listEquipmentsService;
    const dto = {
        model: "Test Equipment",
        manufacturerId: null,
    };
    beforeAll(async () => {
        postgresEquipmentsRepository = new PostgresEquipmentRepository_1.PostgresEquipmentsRepository(index_test_1.default);
        postgresManufacturersRepository = new PostgresManufacturerRepository_1.PostgresManufacturersRepository(index_test_1.default);
        createEquipmentsService = new CreateEquipmentService_1.CreateEquipmentService(postgresEquipmentsRepository, postgresManufacturersRepository);
        listEquipmentsService = new ListEquipmentsService_1.ListEquipmentsService(postgresEquipmentsRepository);
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
    it("Should be able to list all equipments", async () => {
        const { id: firstId, serialNumber: firstSerialNumber } = await createEquipmentsService.execute(dto);
        const { id: secondId, serialNumber: secondSerialNumber } = await createEquipmentsService.execute(dto);
        const { id: thirdId, serialNumber: thirdSerialNumber } = await createEquipmentsService.execute(dto);
        const sut = await listEquipmentsService.execute();
        const expectedResults = [
            {
                id: firstId,
                model: "Test Equipment",
                serialNumber: firstSerialNumber,
                manufacturerId: null,
            },
            {
                id: secondId,
                model: "Test Equipment",
                serialNumber: secondSerialNumber,
                manufacturerId: null,
            },
            {
                id: thirdId,
                model: "Test Equipment",
                serialNumber: thirdSerialNumber,
                manufacturerId: null,
            },
        ];
        expect(sut).toEqual(expectedResults);
    });
    it("Should be able to show an empty list when the are no values", async () => {
        const sut = await listEquipmentsService.execute();
        expect(sut).toEqual([]);
    });
});
//# sourceMappingURL=ListEquipmentService.spec.js.map