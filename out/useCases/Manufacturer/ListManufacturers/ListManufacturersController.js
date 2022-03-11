"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListManufacturersController = void 0;
class ListManufacturersController {
    constructor(createManufacturerService) {
        this.createManufacturerService = createManufacturerService;
    }
    async handle(res) {
        try {
            const manufacturer = await this.createManufacturerService.execute();
            return res.status(200).send(manufacturer);
        }
        catch (err) {
            return res.status(400).json({
                message: err.message || "Unexpected error.",
            });
        }
    }
}
exports.ListManufacturersController = ListManufacturersController;
//# sourceMappingURL=ListManufacturersController.js.map