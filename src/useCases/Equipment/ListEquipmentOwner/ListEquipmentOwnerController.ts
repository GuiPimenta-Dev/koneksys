import { Request, Response } from "express";
import { ListEquipmentOwnerService } from "./ListEquipmentOwnerService";

export class ListEquipmentOwnerController {
  constructor(private listEquipmentOwnerService: ListEquipmentOwnerService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const result = await this.listEquipmentOwnerService.execute(id);

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }
    return res.status(200).send(result);
  }
}
