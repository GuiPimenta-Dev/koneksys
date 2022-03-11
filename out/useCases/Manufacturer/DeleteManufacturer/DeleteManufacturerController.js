"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManufacturerController = void 0;
class DeleteManufacturerController {
    constructor(deleteManufacturerService) {
        this.deleteManufacturerService = deleteManufacturerService;
    }
    async handle(req, res) {
        const { id } = req.params;
        try {
            await this.deleteManufacturerService.execute(id);
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