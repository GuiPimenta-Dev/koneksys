"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEquipmentService = void 0;
class UpdateEquipmentService {
    constructor(equipmentRepository, manufacturerEquipmentRepository) {
        this.equipmentRepository = equipmentRepository;
        this.manufacturerEquipmentRepository = manufacturerEquipmentRepository;
    }
    async execute(dto) {
        if (dto.manufacturerId === undefined) {
            return new Error("You need to send the manufacturerId!");
        }
        const equipment = await this.equipmentRepository.findById(dto.id);
        if (!equipment) {
            return new Error("This Equipment does not exists!");
        }
        const manufacturer = await this.manufacturerEquipmentRepository.findById(dto.manufacturerId);
        if (!manufacturer && dto.manufacturerId !== null) {
            return new Error("This Manufacturer does not exists!");
        }
        return await this.equipmentRepository.update(dto);
    }
}
exports.UpdateEquipmentService = UpdateEquipmentService;
//# sourceMappingURL=UpdateEquipmentService.js.map