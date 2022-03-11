"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManufacturerController = void 0;
class CreateManufacturerController {
    constructor(createManufacturerService) {
        this.createManufacturerService = createManufacturerService;
    }
    async handle(req, res) {
        const { name } = req.body;
        try {
            await this.createManufacturerService.execute({
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
exports.CreateManufacturerController = CreateManufacturerController;
//# sourceMappingURL=CreateManufacturerController.js.map