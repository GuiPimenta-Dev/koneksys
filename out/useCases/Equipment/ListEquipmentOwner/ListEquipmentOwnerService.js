"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListEquipmentOwnerService = void 0;
class ListEquipmentOwnerService {
    constructor(equipmentRepository) {
        this.equipmentRepository = equipmentRepository;
    }
    async execute(id) {
        const equipment = await this.equipmentRepository.findById(id);
        if (!equipment) {
            return new Error("This Equipment does not exists!");
        }
        return await this.equipmentRepository.listOwner(id);
    }
}
exports.ListEquipmentOwnerService = ListEquipmentOwnerService;
//# sourceMappingURL=ListEquipmentOwnerService.js.map