"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListManufacturerController = void 0;
class ListManufacturerController {
  constructor(createManufacturerEquipmentsUseCase) {
    this.createManufacturerEquipmentsUseCase =
      createManufacturerEquipmentsUseCase;
  }
  async handle(req, res) {
    const { id } = req.params;
    const result = await this.createManufacturerEquipmentsUseCase.execute(id);
    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }
    return res.status(200).send(result);
  }
}
exports.ListManufacturerController = ListManufacturerController;
//# sourceMappingURL=ListManufacturerController.js.map
