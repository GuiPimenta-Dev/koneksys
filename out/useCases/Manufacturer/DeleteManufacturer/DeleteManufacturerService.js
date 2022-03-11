"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManufacturerService = void 0;
class DeleteManufacturerService {
    constructor(manufacturersRepository) {
        this.manufacturersRepository = manufacturersRepository;
    }
    async execute(id) {
        await this.manufacturersRepository.delete(id);
    }
}
exports.DeleteManufacturerService = DeleteManufacturerService;
//# sourceMappingURL=DeleteManufacturerService.js.map