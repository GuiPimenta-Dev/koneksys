import { Request, Response } from "express";
import { ListManufacturerService } from "./ListManufacturerService";

export class ListManufacturerController {
  constructor(private createManufacturerService: ListManufacturerService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const manufacturer = await this.createManufacturerService.execute(id);

      return res.status(200).send(manufacturer);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
