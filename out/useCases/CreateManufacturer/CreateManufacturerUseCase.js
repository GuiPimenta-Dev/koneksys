"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManufacturerUseCase = void 0;
const Manufacturer_1 = require("../../entities/Manufacturer");
class CreateManufacturerUseCase {
    constructor(manufacturersRepository) {
        this.manufacturersRepository = manufacturersRepository;
    }
    async execute(data) {
        const manufacturerAlreadyExists = await this.manufacturersRepository.findByName(data.name);
        if (manufacturerAlreadyExists) {
            throw new Error("Manufacturer already exists.");
        }
        const manufacturer = new Manufacturer_1.Manufacturer(data);
        await this.manufacturersRepository.save(manufacturer);
    }
    async listAll() {
        return await this.manufacturersRepository.listAll();
    }
    async listOne(id) {
        return await this.manufacturersRepository.listOne(id);
    }
}
exports.CreateManufacturerUseCase = CreateManufacturerUseCase;
//# sourceMappingURL=CreateManufacturerUseCase.js.map