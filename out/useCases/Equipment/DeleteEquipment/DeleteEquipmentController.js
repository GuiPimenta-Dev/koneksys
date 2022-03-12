"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEquipmentController = void 0;
class DeleteEquipmentController {
    constructor(deleteEquipmentService) {
        this.deleteEquipmentService = deleteEquipmentService;
    }
    async handle(req, res) {
        const { id } = req.params;
        await this.deleteEquipmentService.execute(id);
        return res.status(201).send();
    }
}
exports.DeleteEquipmentController = DeleteEquipmentController;
//# sourceMappingURL=DeleteEquipmentController.js.map