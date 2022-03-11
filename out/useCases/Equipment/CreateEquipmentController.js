"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEquipmentController = void 0;
class CreateEquipmentController {
    constructor(createEquipmentUseCase) {
        this.createEquipmentUseCase = createEquipmentUseCase;
    }
    async handle(req, res) {
        const { model } = req.body;
        try {
            await this.createEquipmentUseCase.execute({
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
    async listAll(res) {
        try {
            const equipments = await this.createEquipmentUseCase.listAll();
            return res.status(200).send(equipments);
        }
        catch (err) {
            return res.status(400).json({
                message: err.message || "Unexpected error.",
            });
        }
    }
    async listOne(req, res) {
        const id = req.params["id"];
        try {
            const equipment = await this.createEquipmentUseCase.listOne(id);
            return res.status(200).send(equipment);
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