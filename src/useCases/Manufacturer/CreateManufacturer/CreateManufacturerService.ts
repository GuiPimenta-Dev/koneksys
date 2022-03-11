import { IManufacturerRepository } from "../../../repositories/IManufacturerRepository";
import { ICreateManufacturerDTO } from "./CreateManufacturerDTO";
import { Manufacturer } from "../../../entities/Manufacturer";

export class CreateManufacturerService {
  constructor(private manufacturersRepository: IManufacturerRepository) {}

  async execute(data: ICreateManufacturerDTO) {
    const manufacturer = new Manufacturer(data);

    await this.manufacturersRepository.save(manufacturer);
  }
}
