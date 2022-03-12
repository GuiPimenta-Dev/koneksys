"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UpdateEquipmentService_1 = require("./UpdateEquipmentService");
const CreateEquipmentService_1 = require("../CreateEquipment/CreateEquipmentService");
const PostgresEquipmentRepository_1 = require("../../../repositories/implementations/PostgresEquipmentRepository");
const PostgresManufacturerRepository_1 = require("../../../repositories/implementations/PostgresManufacturerRepository");
const fc_1 = require("../../../utils/fc");
const index_test_1 = __importDefault(require("../../../db/index-test"));
const CreateEquipment_1 = require("../CreateEquipment");
const CreateManufacturerService_1 = require("../../Manufacturer/CreateManufacturer/CreateManufacturerService");
describe("Update Equipments", () => {
    let postgresEquipmentsRepository;
    let postgresManufacturersRepository;
    let createManufacturerService;
    let createEquipmentsService;
    let updateEquipmentService;
    const dto = {
        model: "Test Equipment",
        manufacturerId: null,
    };
    beforeAll(async () => {
        postgresEquipmentsRepository = new PostgresEquipmentRepository_1.PostgresEquipmentsRepository(index_test_1.default);
        postgresManufacturersRepository = new PostgresManufacturerRepository_1.PostgresManufacturersRepository(index_test_1.default);
        createManufacturerService = new CreateManufacturerService_1.CreateManufacturerService(postgresManufacturersRepository);
        createEquipmentsService = new CreateEquipmentService_1.CreateEquipmentService(postgresEquipmentsRepository, postgresManufacturersRepository);
        updateEquipmentService = new UpdateEquipmentService_1.UpdateEquipmentService(postgresEquipmentsRepository, postgresManufacturersRepository);
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
    it("Should be able to Update an equipment", async () => {
        const { id } = await createEquipmentsService.execute(dto);
        const updatedDTO = {
            id,
            model: "Updated Equipment",
            serialNumber: "New Serial Number",
            manufacturerId: null,
        };
        const sut = await updateEquipmentService.execute(updatedDTO);
        expect(sut).toEqual(updatedDTO);
    });
    it("Should throw an error if manufacturerId is missing", async () => {
        const dto = {
            model: "Test Equipment",
        };
        const sut = await updateEquipmentService.execute(dto);
        expect(sut.message).toEqual("You need to send the manufacturerId!");
    });
    it("Should be able to be related to another manufacturer", async () => {
        const manufacturerDTO = {
            name: "Test Manufacturer",
        };
        const { id: manufacturerId, name } = await createManufacturerService.execute(manufacturerDTO);
        const equipment = await CreateEquipment_1.createEquipmentService.execute(dto);
        console.log(equipment);
        // const updatedDTO = {
        //   id,
        //   manufacturerId: null,
        // };
    });
});
//# sourceMappingURL=UpdateEquipmentService.spec.js.map