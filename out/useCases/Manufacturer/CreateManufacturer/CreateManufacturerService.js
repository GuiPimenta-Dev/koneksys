"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManufacturerService = void 0;
const Manufacturer_1 = require("../../../entities/Manufacturer");
class CreateManufacturerService {
    constructor(manufacturersRepository) {
        this.manufacturersRepository = manufacturersRepository;
    }
    async execute(data) {
        const manufacturer = new Manufacturer_1.Manufacturer(data);
        await this.manufacturersRepository.save(manufacturer);
    }
}
exports.CreateManufacturerService = CreateManufacturerService;
//# sourceMappingURL=CreateManufacturerService.js.map