"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DeleteEquipmentService_1 = require("./DeleteEquipmentService");
const CreateEquipmentService_1 = require("../CreateEquipment/CreateEquipmentService");
const PostgresEquipmentRepository_1 = require("../../../repositories/implementations/PostgresEquipmentRepository");
const PostgresManufacturerRepository_1 = require("../../../repositories/implementations/PostgresManufacturerRepository");
const fc_1 = require("../../../utils/fc");
const index_test_1 = __importDefault(require("../../../db/index-test"));
describe("List Equipment", () => {
    let postgresEquipmentsRepository;
    let postgresManufacturersRepository;
    let createEquipmentService;
    let deleteEquipmentService;
    beforeAll(async () => {
        postgresEquipmentsRepository = new PostgresEquipmentRepository_1.PostgresEquipmentsRepository(index_test_1.default);
        postgresManufacturersRepository = new PostgresManufacturerRepository_1.PostgresManufacturersRepository(index_test_1.default);
        createEquipmentService = new CreateEquipmentService_1.CreateEquipmentService(postgresEquipmentsRepository, postgresManufacturersRepository);
        deleteEquipmentService = new DeleteEquipmentService_1.DeleteEquipmentService(postgresEquipmentsRepository);
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
    it("Should be able to create to delete an existing equipment", async () => {
        const dto = {
            model: "Test Equipment",
            manufacturerId: null,
        };
        const { id } = await createEquipmentService.execute(dto);
        const sut = await deleteEquipmentService.execute(id);
        expect(sut).toBe(undefined);
    });
    it("Should throw an error when equipment does not exists", async () => {
        const id = "d7972f47-5124-459b-812b-dba228743129";
        const sut = await deleteEquipmentService.execute(id);
        expect(sut.message).toEqual("This Equipment does not exists!");
    });
});
//# sourceMappingURL=DeleteEquipmentService.spec.js.map