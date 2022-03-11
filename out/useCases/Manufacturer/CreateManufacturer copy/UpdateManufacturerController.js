"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManufacturerController = void 0;
class UpdateManufacturerController {
  constructor(createManufacturerUseCase) {
    this.createManufacturerUseCase = createManufacturerUseCase;
  }
  async handle(req, res) {
    const { model } = req.body;
    const id = req.params["id"];
    try {
      await this.createManufacturerUseCase.execute({
        id,
        model,
      });
      return res.status(201).send();
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
exports.UpdateManufacturerController = UpdateManufacturerController;
//# sourceMappingURL=UpdateManufacturerController.js.map
