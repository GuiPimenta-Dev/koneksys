import { Request, Response } from "express";
import { DeleteEquipmentService } from "./DeleteEquipmentService";

export class DeleteEquipmentController {
  constructor(private deleteEquipmentService: DeleteEquipmentService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    await this.deleteEquipmentService.execute(id);

    return res.status(201).send();
  }
}
