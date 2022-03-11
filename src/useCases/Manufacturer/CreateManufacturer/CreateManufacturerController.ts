import { Request, Response } from "express";
import { CreateManufacturerService } from "./CreateManufacturerService";

export class CreateManufacturerController {
  constructor(private createManufacturerService: CreateManufacturerService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;

    try {
      await this.createManufacturerService.execute({
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
