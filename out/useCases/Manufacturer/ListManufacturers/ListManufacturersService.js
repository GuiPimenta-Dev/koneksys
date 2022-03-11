"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListManufacturersService = void 0;
class ListManufacturersService {
    constructor(manufacturersRepository) {
        this.manufacturersRepository = manufacturersRepository;
    }
    async execute() {
        return await this.manufacturersRepository.listAll();
    }
}
exports.ListManufacturersService = ListManufacturersService;
//# sourceMappingURL=ListManufacturersService.js.map