import { Request, Response } from "express";
import { DeleteManufacturerService } from "./DeleteManufacturerService";

export class DeleteManufacturerController {
  constructor(private deleteManufacturerService: DeleteManufacturerService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      await this.deleteManufacturerService.execute(id);

      return res.status(201).send();
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
