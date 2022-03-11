"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEquipmentController = void 0;
class UpdateEquipmentController {
    constructor(createEquipmentService) {
        this.createEquipmentService = createEquipmentService;
    }
    async handle(req, res) {
        const { id } = req.params;
        const { model, serialNumber, manufacturerId } = req.body;
        const result = await this.createEquipmentService.execute({
            id,
            model,
            serialNumber,
            manufacturerId,
        });
        if (result instanceof Error) {
            return res.status(400).json(result.message);
        }
        return res.status(200).send(result);
    }
}
exports.UpdateEquipmentController = UpdateEquipmentController;
//# sourceMappingURL=UpdateEquipmentController.js.map