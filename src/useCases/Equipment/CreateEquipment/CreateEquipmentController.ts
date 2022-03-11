import { Request, Response } from "express";
import { CreateEquipmentUseCase } from "./CreateEquipmentUseCase";

export class CreateEquipmentController {
  constructor(private createEquipmentUseCase: CreateEquipmentUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { model } = req.body;

    try {
      await this.createEquipmentUseCase.execute({
        model,
      });

      return res.status(201).send();
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
