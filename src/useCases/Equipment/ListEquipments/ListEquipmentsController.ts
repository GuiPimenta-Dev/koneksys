import { Request, Response } from "express";
import { ListEquipmentsService } from "./ListEquipmentsService";

export class ListEquipmentsController {
  constructor(private listEquipmentService: ListEquipmentsService) {}

  async handle(res: Response): Promise<Response> {
    try {
      const equipments = await this.listEquipmentService.execute();
      return res.status(200).send(equipments);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
