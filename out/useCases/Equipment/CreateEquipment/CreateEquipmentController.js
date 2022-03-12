"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEquipmentController = void 0;
class CreateEquipmentController {
    constructor(createEquipmentService) {
        this.createEquipmentService = createEquipmentService;
    }
    async handle(req, res) {
        const { model, manufacturerId } = req.body;
        const result = await this.createEquipmentService.execute({
            model,
            manufacturerId,
        });
        if (result instanceof Error) {
            return res.status(400).json(result.message);
        }
        return res.status(201).send();
    }
}
exports.CreateEquipmentController = CreateEquipmentController;
//# sourceMappingURL=CreateEquipmentController.js.map