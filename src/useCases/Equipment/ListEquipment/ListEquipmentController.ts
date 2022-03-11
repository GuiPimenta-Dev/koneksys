import { Request, Response } from "express";
import { ListEquipmentUseCase } from "./ListEquipmentUseCase";

export class ListEquipmentController {
  constructor(private listEquipmentUseCase: ListEquipmentUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const id = req.params["id"];

    try {
      const equipment = await this.listEquipmentUseCase.execute(id);
      return res.status(200).send(equipment);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
