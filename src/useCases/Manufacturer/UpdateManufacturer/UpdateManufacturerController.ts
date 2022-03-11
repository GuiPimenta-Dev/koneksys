import { Request, Response } from "express";
import { UpdateManufacturerUseCase } from "./UpdateManufacturerUseCase";

export class UpdateManufacturerController {
  constructor(private createManufacturerUseCase: UpdateManufacturerUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;
    const id = req.params["id"];

    try {
      await this.createManufacturerUseCase.execute({
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
