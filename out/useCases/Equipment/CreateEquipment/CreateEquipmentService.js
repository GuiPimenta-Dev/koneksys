"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEquipmentService = void 0;
const Equipment_1 = require("../../../entities/Equipment");
class CreateEquipmentService {
    constructor(equipmentRepository, manufacturerRepository) {
        this.equipmentRepository = equipmentRepository;
        this.manufacturerRepository = manufacturerRepository;
    }
    async execute(dto) {
        if (!dto.model) {
            return new Error("The Equipment must have a model!");
        }
        if (!dto.manufacturerId) {
            dto.manufacturerId = null;
        }
        if (dto.manufacturerId != null) {
            const manufacturer = await this.manufacturerRepository.findById(dto.manufacturerId);
            if (!manufacturer) {
                return new Error("This Manufacturer does not exists!");
            }
        }
        const equipment = new Equipment_1.Equipment(dto);
        return await this.equipmentRepository.save(equipment);
    }
}
exports.CreateEquipmentService = CreateEquipmentService;
//# sourceMappingURL=CreateEquipmentService.js.map