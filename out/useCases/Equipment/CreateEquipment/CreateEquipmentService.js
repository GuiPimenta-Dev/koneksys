"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEquipmentService = void 0;
const Equipment_1 = require("../../../entities/Equipment");
class CreateEquipmentService {
    constructor(equipmentRepository) {
        this.equipmentRepository = equipmentRepository;
    }
    async execute(data) {
        const equipment = new Equipment_1.Equipment(data);
        await this.equipmentRepository.save(equipment);
    }
}
exports.CreateEquipmentService = CreateEquipmentService;
//# sourceMappingURL=CreateEquipmentService.js.map