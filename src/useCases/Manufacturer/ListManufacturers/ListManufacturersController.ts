import { Request, Response } from "express";
import { ListManufacturersUseCase } from "./ListManufacturersUseCase";

export class ListManufacturersController {
  constructor(private createManufacturerUseCase: ListManufacturersUseCase) {}

  async handle(res: Response): Promise<Response> {
    try {
      const manufacturer = await this.createManufacturerUseCase.execute();
      return res.status(200).send(manufacturer);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
