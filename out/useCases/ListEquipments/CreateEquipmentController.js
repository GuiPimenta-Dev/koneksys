"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEquipmentController = void 0;
class CreateEquipmentController {
    constructor(createEquipmentUseCase) {
        this.createEquipmentUseCase = createEquipmentUseCase;
    }
    async handle(request, response) {
        const { model } = request.body;
        try {
            await this.createEquipmentUseCase.execute({
                model,
            });
            return response.status(201).send();
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || "Unexpected error.",
            });
        }
    }
    async list(_, response) {
        try {
            const equipments = await this.createEquipmentUseCase.list();
            return response.status(201).send(equipments);
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || "Unexpected error.",
            });
        }
    }
}
exports.CreateEquipmentController = CreateEquipmentController;
//# sourceMappingURL=CreateEquipmentController.js.map