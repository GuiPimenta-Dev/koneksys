"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManufacturerController = void 0;
class CreateManufacturerController {
  constructor(createManufacturerUseCase) {
    this.createManufacturerUseCase = createManufacturerUseCase;
  }
  async handle(req, res) {
    const { name } = req.body;
    try {
      await this.createManufacturerUseCase.execute({
        name,
      });
      return res.status(201).send();
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
  async listAll(res) {
    try {
      const manufacturer = await this.createManufacturerUseCase.listAll();
      return res.status(200).send(manufacturer);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
  async listOne(req, res) {
    const id = req.params["id"];
    try {
      const manufacturer = await this.createManufacturerUseCase.listOne(id);
      return res.status(200).send(manufacturer);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
exports.CreateManufacturerController = CreateManufacturerController;
//# sourceMappingURL=CreateManufacturerController.js.map
