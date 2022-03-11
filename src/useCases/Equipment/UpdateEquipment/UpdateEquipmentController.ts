import { Request, Response } from "express";
import { UpdateEquipmentService } from "./UpdateEquipmentService";
import { Manufacturer } from "../../../entities/Manufacturer";

export class UpdateEquipmentController {
  constructor(private createEquipmentService: UpdateEquipmentService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { model, serialNumber, manufacturerId } = req.body;

    const result = await this.createEquipmentService.execute({
      id,
      model,
      serialNumber,
      manufacturerId,
    });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(200).send(result);
  }
}
