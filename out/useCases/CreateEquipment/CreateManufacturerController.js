"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManufacturerController = void 0;
class CreateManufacturerController {
  constructor(createManufacturerUseCase) {
    this.createManufacturerUseCase = createManufacturerUseCase;
  }
  async handle(request, response) {
    const { name } = request.body;
    try {
      await this.createManufacturerUseCase.execute({
        name,
      });
      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
exports.CreateManufacturerController = CreateManufacturerController;
//# sourceMappingURL=CreateManufacturerController.js.map
