"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEquipmentController = void 0;
class CreateEquipmentController {
    constructor(createEquipmentService) {
        this.createEquipmentService = createEquipmentService;
    }
    async handle(req, res) {
        const { model, manufacturerId } = req.body;
        try {
            await this.createEquipmentService.execute({
                model,
                manufacturerId,
            });
            return res.status(201).send();
        }
        catch (err) {
            return res.status(400).json({
                message: err.message || "Unexpected error.",
            });
        }
    }
}
exports.CreateEquipmentController = CreateEquipmentController;
//# sourceMappingURL=CreateEquipmentController.js.map