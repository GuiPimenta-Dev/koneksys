"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListEquipmentsService = void 0;
class ListEquipmentsService {
    constructor(equipmentRepository) {
        this.equipmentRepository = equipmentRepository;
    }
    async execute() {
        return await this.equipmentRepository.listAll();
    }
}
exports.ListEquipmentsService = ListEquipmentsService;
//# sourceMappingURL=ListEquipmentsService.js.map