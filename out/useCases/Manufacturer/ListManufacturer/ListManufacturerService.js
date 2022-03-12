"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListManufacturerService = void 0;
class ListManufacturerService {
    constructor(manufacturerRepository) {
        this.manufacturerRepository = manufacturerRepository;
    }
    async execute(id) {
        const manufacturer = await this.manufacturerRepository.findById(id);
        if (!manufacturer) {
            return new Error("This Manufacturer does not exists!");
        }
        return await this.manufacturerRepository.listOne(id);
    }
}
exports.ListManufacturerService = ListManufacturerService;
//# sourceMappingURL=ListManufacturerService.js.map