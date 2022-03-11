import { IManufacturerRepository } from "../../../repositories/IManufacturerRepository";
import { ICreateManufacturerDTO } from "./CreateManufacturerDTO";
import { Manufacturer } from "../../../models/Manufacturer";

export class CreateManufacturerUseCase {
  constructor(private manufacturersRepository: IManufacturerRepository) {}

  async execute(data: ICreateManufacturerDTO) {
    const manufacturer = new Manufacturer(data);

    await this.manufacturersRepository.save(manufacturer);
  }
}
