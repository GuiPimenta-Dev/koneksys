import { Request, Response } from "express";
import { DeleteEquipmentUseCase } from "./DeleteEquipmentUseCase";

export class DeleteEquipmentController {
  constructor(private deleteEquipmentUseCase: DeleteEquipmentUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const id = req.params["id"];

    try {
      await this.deleteEquipmentUseCase.execute(id);

      return res.status(201).send();
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
