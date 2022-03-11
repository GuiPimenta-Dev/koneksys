"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListManufacturerController = void 0;
class ListManufacturerController {
  constructor(createManufacturerUseCase) {
    this.createManufacturerUseCase = createManufacturerUseCase;
  }
  async handle(req, res) {
    const { id } = req.params;
    try {
      const manufacturer = await this.createManufacturerUseCase.execute(id);
      return res.status(200).send(manufacturer);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
exports.ListManufacturerController = ListManufacturerController;
//# sourceMappingURL=ListManufacturerController.js.map
