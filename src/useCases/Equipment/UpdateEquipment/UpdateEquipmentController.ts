import { Request, Response } from "express";
import { UpdateEquipmentUseCase } from "./UpdateEquipmentUseCase";

export class UpdateEquipmentController {
  constructor(private createEquipmentUseCase: UpdateEquipmentUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { model } = req.body;
    const id = req.params["id"];

    try {
      await this.createEquipmentUseCase.execute({
        id,
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
