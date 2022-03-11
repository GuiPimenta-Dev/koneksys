"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListManufacturersUseCase = void 0;
class ListManufacturersUseCase {
  constructor(manufacturersRepository) {
    this.manufacturersRepository = manufacturersRepository;
  }
  async execute() {
    return await this.manufacturersRepository.listAll();
  }
}
exports.ListManufacturersUseCase = ListManufacturersUseCase;
//# sourceMappingURL=ListManufacturersUseCase.js.map
