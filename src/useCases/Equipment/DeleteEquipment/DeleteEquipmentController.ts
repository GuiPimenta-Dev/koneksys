import { Request, Response } from "express";
import { DeleteEquipmentService } from "./DeleteEquipmentService";

export class DeleteEquipmentController {
  constructor(private deleteEquipmentService: DeleteEquipmentService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const result = await this.deleteEquipmentService.execute(id);

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(201).send();
  }
}
