import { Request, Response } from "express";
import { CreateManufacturerService } from "./CreateManufacturerService";

export class CreateManufacturerController {
  constructor(private createManufacturerService: CreateManufacturerService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;

    const result = await this.createManufacturerService.execute({
      name,
    });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }
    return res.status(201).send(result);
  }
}
