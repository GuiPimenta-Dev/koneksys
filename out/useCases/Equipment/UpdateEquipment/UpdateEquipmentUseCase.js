"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEquipmentUseCase = void 0;
class UpdateEquipmentUseCase {
    constructor(equipmentRepository) {
        this.equipmentRepository = equipmentRepository;
    }
    async execute(dto) {
        await this.equipmentRepository.update(dto);
    }
}
exports.UpdateEquipmentUseCase = UpdateEquipmentUseCase;
//# sourceMappingURL=UpdateEquipmentUseCase.js.map