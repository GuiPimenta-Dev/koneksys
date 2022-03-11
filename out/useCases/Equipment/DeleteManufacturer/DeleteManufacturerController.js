"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManufacturerController = void 0;
class DeleteManufacturerController {
    constructor(deleteManufacturerUseCase) {
        this.deleteManufacturerUseCase = deleteManufacturerUseCase;
    }
    async handle(req, res) {
        const id = req.params["id"];
        try {
            await this.deleteManufacturerUseCase.execute(id);
            return res.status(201).send();
        }
        catch (err) {
            return res.status(400).json({
                message: err.message || "Unexpected error.",
            });
        }
    }
}
exports.DeleteManufacturerController = DeleteManufacturerController;
//# sourceMappingURL=DeleteManufacturerController.js.map