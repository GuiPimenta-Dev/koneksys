"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListEquipmentOwnerController = void 0;
class ListEquipmentOwnerController {
    constructor(listEquipmentOwnerService) {
        this.listEquipmentOwnerService = listEquipmentOwnerService;
    }
    async handle(req, res) {
        const { id } = req.params;
        const result = await this.listEquipmentOwnerService.execute(id);
        if (result instanceof Error) {
            return res.status(400).json(result.message);
        }
        return res.status(200).send(result);
    }
}
exports.ListEquipmentOwnerController = ListEquipmentOwnerController;
//# sourceMappingURL=ListEquipmentOwnerController.js.map