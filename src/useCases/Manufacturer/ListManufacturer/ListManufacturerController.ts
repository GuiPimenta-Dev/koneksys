import { Request, Response } from "express";
import { ListManufacturerUseCase } from "./ListManufacturerUseCase";

export class ListManufacturerController {
  constructor(private createManufacturerUseCase: ListManufacturerUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const id = req.params["id"];

    try {
      const manufacturer = await this.createManufacturerUseCase.execute(id);

      return res.status(200).send(manufacturer);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
