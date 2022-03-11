import { Request, Response } from "express";
import { CreateManufacturerUseCase } from "./CreateManufacturerUseCase";

export class CreateManufacturerController {
  constructor(private createManufacturerUseCase: CreateManufacturerUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;

    try {
      await this.createManufacturerUseCase.execute({
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
