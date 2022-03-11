"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManufacturerUseCase = void 0;
const Manufacturer_1 = require("../../../entities/Manufacturer");
class CreateManufacturerUseCase {
  constructor(manufacturersRepository) {
    this.manufacturersRepository = manufacturersRepository;
  }
  async execute(data) {
    const manufacturer = new Manufacturer_1.Manufacturer(data);
    await this.manufacturersRepository.save(manufacturer);
  }
}
exports.CreateManufacturerUseCase = CreateManufacturerUseCase;
//# sourceMappingURL=CreateManufacturerUseCase.js.map
