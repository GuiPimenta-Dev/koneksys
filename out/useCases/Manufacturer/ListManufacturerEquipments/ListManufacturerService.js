"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListManufacturerUseCase = void 0;
class ListManufacturerUseCase {
  constructor(manufacturerRepository) {
    this.manufacturerRepository = manufacturerRepository;
  }
  async execute(id) {
    return await this.manufacturerRepository.listOne(id);
  }
}
exports.ListManufacturerUseCase = ListManufacturerUseCase;
//# sourceMappingURL=ListManufacturerUseCase.js.map
