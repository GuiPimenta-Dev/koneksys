"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManufacturerUseCase = void 0;
class UpdateManufacturerUseCase {
    constructor(manufacturersRepository) {
        this.manufacturersRepository = manufacturersRepository;
    }
    async execute(data) {
        await this.manufacturersRepository.update(data);
    }
}
exports.UpdateManufacturerUseCase = UpdateManufacturerUseCase;
//# sourceMappingURL=UpdateManufacturerUseCase.js.map