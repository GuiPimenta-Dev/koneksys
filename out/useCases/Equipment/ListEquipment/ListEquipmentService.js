"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListEquipmentService = void 0;
class ListEquipmentService {
    constructor(equipmentRepository) {
        this.equipmentRepository = equipmentRepository;
    }
    async execute(id) {
        const equipment = await this.equipmentRepository.findById(id);
        if (!equipment) {
            return new Error("This Equipment does not exists!");
        }
        return await this.equipmentRepository.listOne(id);
    }
}
exports.ListEquipmentService = ListEquipmentService;
//# sourceMappingURL=ListEquipmentService.js.map