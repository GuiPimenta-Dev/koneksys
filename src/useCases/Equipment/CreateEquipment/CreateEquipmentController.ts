import { Request, Response } from "express";
import { CreateEquipmentService } from "./CreateEquipmentService";

export class CreateEquipmentController {
  constructor(private createEquipmentService: CreateEquipmentService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { model, manufacturerId } = req.body;

    const result = await this.createEquipmentService.execute({
      model,
      manufacturerId,
    });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(201).send();
  }
}
