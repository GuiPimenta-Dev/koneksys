"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListEquipmentUseCase = void 0;
class ListEquipmentUseCase {
    constructor(equipmentRepository) {
        this.equipmentRepository = equipmentRepository;
    }
    async execute() {
        return await this.equipmentRepository.listAll();
    }
}
exports.ListEquipmentUseCase = ListEquipmentUseCase;
//# sourceMappingURL=ListEquipmentUseCase.js.map