"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateManufacturerService_1 = require("../../Manufacturer/CreateManufacturer/CreateManufacturerService");
const ListEquipmentOwnerService_1 = require("./ListEquipmentOwnerService");
const CreateEquipmentService_1 = require("../CreateEquipment/CreateEquipmentService");
const PostgresEquipmentRepository_1 = require("../../../repositories/implementations/PostgresEquipmentRepository");
const PostgresManufacturerRepository_1 = require("../../../repositories/implementations/PostgresManufacturerRepository");
const fc_1 = require("../../../utils/fc");
const index_test_1 = __importDefault(require("../../../db/index-test"));
describe("List Equipment", () => {
    let postgresEquipmentsRepository;
    let postgresManufacturerRepository;
    let createEquipmentService;
    let listEquipmentOwnerService;
    let createManufacturerService;
    beforeAll(async () => {
        postgresEquipmentsRepository = new PostgresEquipmentRepository_1.PostgresEquipmentsRepository(index_test_1.default);
        postgresManufacturerRepository = new PostgresManufacturerRepository_1.PostgresManufacturersRepository(index_test_1.default);
        createEquipmentService = new CreateEquipmentService_1.CreateEquipmentService(postgresEquipmentsRepository, postgresManufacturerRepository);
        listEquipmentOwnerService = new ListEquipmentOwnerService_1.ListEquipmentOwnerService(postgresEquipmentsRepository);
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
    it("Should be able to list the equipment`s owner", async () => {
        const manufacturerDTO = {
            name: "Test Equipment",
        };
        const { id: manufacturerId, name } = await createManufacturerService.execute(manufacturerDTO);
        const equipmentDTO = {
            model: "Test Equipment",
            manufacturerId,
        };
        const { id: equipmentId } = await createEquipmentService.execute(equipmentDTO);
        const sut = await listEquipmentOwnerService.execute(equipmentId);
        expect(sut.id).toEqual(manufacturerId);
        expect(sut.name).toEqual(name);
    });
    it("Should throw an error if there is no Equipment", async () => {
        const id = "31a113dd-1486-4b75-a392-1b0c3ef37756";
        const sut = await listEquipmentOwnerService.execute(id);
        expect(sut.message).toEqual("This Equipment does not exists!");
    });
});
//# sourceMappingURL=ListEquipmentOwnerService.spec.js.map