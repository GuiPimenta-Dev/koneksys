import { Request, Response } from "express";
import { ListEquipmentService } from "./ListEquipmentService";

export class ListEquipmentController {
  constructor(private listEquipmentService: ListEquipmentService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const equipment = await this.listEquipmentService.execute(id);
      return res.status(200).send(equipment);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
