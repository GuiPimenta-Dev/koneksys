"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListEquipmentsUseCase = void 0;
class ListEquipmentsUseCase {
    constructor(equipmentRepository) {
        this.equipmentRepository = equipmentRepository;
    }
    async execute() {
        return await this.equipmentRepository.listAll();
    }
}
exports.ListEquipmentsUseCase = ListEquipmentsUseCase;
//# sourceMappingURL=ListEquipmentsUseCase.js.map