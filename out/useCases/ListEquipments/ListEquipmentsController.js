"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListEquipmentsController = void 0;
class ListEquipmentsController {
  constructor(listEquipmentUseCase) {
    this.listEquipmentUseCase = listEquipmentUseCase;
  }
  async handle(res) {
    try {
      const equipments = await this.listEquipmentUseCase.execute();
      return res.status(200).send(equipments);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
exports.ListEquipmentsController = ListEquipmentsController;
//# sourceMappingURL=ListEquipmentsController.js.map
