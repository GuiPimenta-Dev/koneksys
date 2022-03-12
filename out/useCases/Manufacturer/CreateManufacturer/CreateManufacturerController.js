"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManufacturerController = void 0;
class CreateManufacturerController {
    constructor(createManufacturerService) {
        this.createManufacturerService = createManufacturerService;
    }
    async handle(req, res) {
        const { name } = req.body;
        const result = await this.createManufacturerService.execute({
            name,
        });
        if (result instanceof Error) {
            return res.status(400).json(result.message);
        }
        return res.status(201).send(result);
    }
}
exports.CreateManufacturerController = CreateManufacturerController;
//# sourceMappingURL=CreateManufacturerController.js.map