import { Request, Response } from "express";
import { DeleteManufacturerUseCase } from "./DeleteManufacturerUseCase";

export class DeleteManufacturerController {
  constructor(private deleteManufacturerUseCase: DeleteManufacturerUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const id = req.params["id"];

    try {
      await this.deleteManufacturerUseCase.execute(id);

      return res.status(201).send();
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
