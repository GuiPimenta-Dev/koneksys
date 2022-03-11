import { Request, Response } from "express";
import { ListManufacturersService } from "./ListManufacturersService";

export class ListManufacturersController {
  constructor(private createManufacturerService: ListManufacturersService) {}

  async handle(res: Response): Promise<Response> {
    try {
      const manufacturer = await this.createManufacturerService.execute();
      return res.status(200).send(manufacturer);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
