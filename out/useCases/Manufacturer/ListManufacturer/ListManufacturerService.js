"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListManufacturerService = void 0;
class ListManufacturerService {
    constructor(manufacturerRepository) {
        this.manufacturerRepository = manufacturerRepository;
    }
    async execute(id) {
        return await this.manufacturerRepository.listOne(id);
    }
}
exports.ListManufacturerService = ListManufacturerService;
//# sourceMappingURL=ListManufacturerService.js.map