"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListManufacturerUseCase = void 0;
class ListManufacturerUseCase {
  constructor(manufacturersRepository) {
    this.manufacturersRepository = manufacturersRepository;
  }
  async execute() {
    return await this.manufacturersRepository.listAll();
  }
}
exports.ListManufacturerUseCase = ListManufacturerUseCase;
//# sourceMappingURL=ListManufacturerUseCase.js.map
