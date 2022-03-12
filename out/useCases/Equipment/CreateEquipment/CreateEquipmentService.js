"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEquipmentService = void 0;
const Equipment_1 = require("../../../entities/Equipment");
class CreateEquipmentService {
    constructor(equipmentRepository, manufacturerRepository) {
        this.equipmentRepository = equipmentRepository;
        this.manufacturerRepository = manufacturerRepository;
    }
    async execute(data) {
        if (!data.model) {
            return new Error("The Equipment must have a model!");
        }
        if (data.manufacturerId != null) {
            const manufacturer = await this.manufacturerRepository.findById(data.manufacturerId);
            if (!manufacturer) {
                return new Error("This Manufacturer does not exists!");
            }
        }
        const equipment = new Equipment_1.Equipment(data);
        return await this.equipmentRepository.save(equipment);
    }
}
exports.CreateEquipmentService = CreateEquipmentService;
//# sourceMappingURL=CreateEquipmentService.js.map