"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManufacturerService = void 0;
class UpdateManufacturerService {
    constructor(manufacturerRepository) {
        this.manufacturerRepository = manufacturerRepository;
    }
    async execute(dto) {
        const manufacturer = await this.manufacturerRepository.findById(dto.id);
        if (!manufacturer) {
            return new Error("This Manufacturer does not exists!");
        }
        return await this.manufacturerRepository.update(dto);
    }
}
exports.UpdateManufacturerService = UpdateManufacturerService;
//# sourceMappingURL=UpdateManufacturerService.js.map