"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListManufacturerEquipmentsController = void 0;
class ListManufacturerEquipmentsController {
    constructor(createManufacturerEquipmentsService) {
        this.createManufacturerEquipmentsService = createManufacturerEquipmentsService;
    }
    async handle(req, res) {
        const { id } = req.params;
        const result = await this.createManufacturerEquipmentsService.execute(id);
        if (result instanceof Error) {
            return res.status(400).json(result.message);
        }
        return res.status(200).send(result);
    }
}
exports.ListManufacturerEquipmentsController = ListManufacturerEquipmentsController;
//# sourceMappingURL=ListManufacturerEquipmentsController.js.map