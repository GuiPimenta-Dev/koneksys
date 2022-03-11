"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEquipmentController = void 0;
class UpdateEquipmentController {
    constructor(createEquipmentUseCase) {
        this.createEquipmentUseCase = createEquipmentUseCase;
    }
    async handle(req, res) {
        const { model } = req.body;
        const id = req.params["id"];
        try {
            await this.createEquipmentUseCase.execute({
                id,
                model,
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
exports.UpdateEquipmentController = UpdateEquipmentController;
//# sourceMappingURL=UpdateEquipmentController.js.map