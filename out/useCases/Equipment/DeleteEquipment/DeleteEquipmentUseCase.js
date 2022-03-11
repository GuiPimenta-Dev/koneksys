"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEquipmentUseCase = void 0;
class DeleteEquipmentUseCase {
    constructor(equipmentRepository) {
        this.equipmentRepository = equipmentRepository;
    }
    async execute(id) {
        await this.equipmentRepository.delete(id);
    }
}
exports.DeleteEquipmentUseCase = DeleteEquipmentUseCase;
//# sourceMappingURL=DeleteEquipmentUseCase.js.map