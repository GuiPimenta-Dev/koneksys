"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManufacturerService = void 0;
class UpdateManufacturerService {
    constructor(manufacturersRepository) {
        this.manufacturersRepository = manufacturersRepository;
    }
    async execute(data) {
        await this.manufacturersRepository.update(data);
    }
}
exports.UpdateManufacturerService = UpdateManufacturerService;
//# sourceMappingURL=UpdateManufacturerService.js.map