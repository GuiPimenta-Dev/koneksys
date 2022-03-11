"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManufacturerUseCase = void 0;
class DeleteManufacturerUseCase {
  constructor(manufacturersRepository) {
    this.manufacturersRepository = manufacturersRepository;
  }
  async execute(id) {
    await this.manufacturersRepository.delete(id);
  }
}
exports.DeleteManufacturerUseCase = DeleteManufacturerUseCase;
//# sourceMappingURL=DeleteManufacturerUseCase.js.map
