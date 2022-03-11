"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListManufacturerEquipmentsService = void 0;
class ListManufacturerEquipmentsService {
    constructor(manufacturerRepository) {
        this.manufacturerRepository = manufacturerRepository;
    }
    async execute(id) {
        return await this.manufacturerRepository.listEquipments(id);
    }
}
exports.ListManufacturerEquipmentsService = ListManufacturerEquipmentsService;
//# sourceMappingURL=ListManufacturerEquipmentsService.js.map