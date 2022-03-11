"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListEquipmentUseCase = void 0;
class ListEquipmentUseCase {
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
exports.ListEquipmentUseCase = ListEquipmentUseCase;
//# sourceMappingURL=ListEquipmentUseCase.js.map
