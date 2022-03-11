import { Request, Response } from "express";
import { ListManufacturerEquipmentsService } from "./ListManufacturerEquipmentsService";

export class ListManufacturerEquipmentsController {
  constructor(
    private createManufacturerEquipmentsService: ListManufacturerEquipmentsService
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const result = await this.createManufacturerEquipmentsService.execute(id);

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(200).send(result);
  }
}
