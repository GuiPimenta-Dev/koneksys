"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEquipmentController = void 0;
class DeleteEquipmentController {
  constructor(deleteEquipmentUseCase) {
    this.deleteEquipmentUseCase = deleteEquipmentUseCase;
  }
  async handle(req, res) {
    const id = req.params["id"];
    try {
      await this.deleteEquipmentUseCase.execute(id);
      return res.status(201).send();
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
exports.DeleteEquipmentController = DeleteEquipmentController;
//# sourceMappingURL=DeleteManufacturerController.js.map
