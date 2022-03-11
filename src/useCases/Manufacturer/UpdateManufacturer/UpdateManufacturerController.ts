import { Request, Response } from "express";
import { UpdateManufacturerService } from "./UpdateManufacturerService";

export class UpdateManufacturerController {
  constructor(private createManufacturerService: UpdateManufacturerService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name } = req.body;

    try {
      await this.createManufacturerService.execute({
        id,
        name,
      });

      return res.status(201).send();
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
