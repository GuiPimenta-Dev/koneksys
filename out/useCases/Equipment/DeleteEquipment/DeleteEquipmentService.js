"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEquipmentService = void 0;
class DeleteEquipmentService {
    constructor(equipmentRepository) {
        this.equipmentRepository = equipmentRepository;
    }
    async execute(id) {
        const equipment = await this.equipmentRepository.findById(id);
        if (!equipment) {
            return new Error("This Equipment does not exists!");
        }
        await this.equipmentRepository.delete(id);
    }
}
exports.DeleteEquipmentService = DeleteEquipmentService;
//# sourceMappingURL=DeleteEquipmentService.js.map