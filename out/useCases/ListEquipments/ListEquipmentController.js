"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListEquipmentController = void 0;
class ListEquipmentController {
    constructor(listEquipmentUseCase) {
        this.listEquipmentUseCase = listEquipmentUseCase;
    }
    async handle(req, response) {
        try {
            const equipments = await this.listEquipmentUseCase.execute();
            return response.status(200).send(equipments);
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || "Unexpected error.",
            });
        }
    }
}
exports.ListEquipmentController = ListEquipmentController;
//# sourceMappingURL=ListEquipmentController.js.map