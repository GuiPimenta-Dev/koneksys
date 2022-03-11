"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListEquipmentUseCase = void 0;
class ListEquipmentUseCase {
  constructor(equipmentRepository) {
    this.equipmentRepository = equipmentRepository;
  }
  async execute(id) {
    return await this.equipmentRepository.listOne(id);
  }
}
exports.ListEquipmentUseCase = ListEquipmentUseCase;
//# sourceMappingURL=ListEquipmentUseCase.js.map
