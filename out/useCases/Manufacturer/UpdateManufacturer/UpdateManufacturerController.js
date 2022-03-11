"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManufacturerController = void 0;
class UpdateManufacturerController {
    constructor(createManufacturerService) {
        this.createManufacturerService = createManufacturerService;
    }
    async handle(req, res) {
        const { id } = req.params;
        const { name } = req.body;
        try {
            await this.createManufacturerService.execute({
                id,
                name,
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
exports.UpdateManufacturerController = UpdateManufacturerController;
//# sourceMappingURL=UpdateManufacturerController.js.map