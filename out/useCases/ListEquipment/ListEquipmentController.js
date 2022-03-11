"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListEquipmentController = void 0;
class ListEquipmentController {
  constructor(listEquipmentUseCase) {
    this.listEquipmentUseCase = listEquipmentUseCase;
  }
  async handle(req, res) {
    const id = req.params["id"];
    try {
      const equipment = await this.listEquipmentUseCase.execute(id);
      return res.status(200).send(equipment);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
exports.ListEquipmentController = ListEquipmentController;
//# sourceMappingURL=ListEquipmentController.js.map
