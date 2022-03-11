import { Request, Response } from "express";
import { ListEquipmentsUseCase } from "./ListEquipmentsUseCase";

export class ListEquipmentsController {
  constructor(private listEquipmentUseCase: ListEquipmentsUseCase) {}

  async handle(res: Response): Promise<Response> {
    try {
      const equipments = await this.listEquipmentUseCase.execute();
      return res.status(200).send(equipments);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
