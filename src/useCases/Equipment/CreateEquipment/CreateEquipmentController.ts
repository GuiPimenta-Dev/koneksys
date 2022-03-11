import { Request, Response } from "express";
import { CreateEquipmentService } from "./CreateEquipmentService";

export class CreateEquipmentController {
  constructor(private createEquipmentService: CreateEquipmentService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { model, manufacturerId } = req.body;

    try {
      await this.createEquipmentService.execute({
        model,
        manufacturerId,
      });

      return res.status(201).send();
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
