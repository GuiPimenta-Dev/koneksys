"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListManufacturersController = void 0;
class ListManufacturersController {
  constructor(createManufacturerUseCase) {
    this.createManufacturerUseCase = createManufacturerUseCase;
  }
  async handle(res) {
    try {
      const manufacturer = await this.createManufacturerUseCase.execute();
      return res.status(200).send(manufacturer);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
exports.ListManufacturersController = ListManufacturersController;
//# sourceMappingURL=ListManufacturersController.js.map
