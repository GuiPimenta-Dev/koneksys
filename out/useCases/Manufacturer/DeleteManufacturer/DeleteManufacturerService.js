"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManufacturerService = void 0;
class DeleteManufacturerService {
    constructor(manufacturerRepository) {
        this.manufacturerRepository = manufacturerRepository;
    }
    async execute(id) {
        const manufacturer = await this.manufacturerRepository.findById(id);
        if (!manufacturer) {
            return new Error("This Manufacturer does not exists!");
        }
        await this.manufacturerRepository.delete(id);
    }
}
exports.DeleteManufacturerService = DeleteManufacturerService;
//# sourceMappingURL=DeleteManufacturerService.js.map