import { IManufacturerRepository } from "../../../repositories/IManufacturerRepository";
import { ICreateManufacturerDTO } from "./CreateManufacturerDTO";
import { Manufacturer } from "../../../entities/Manufacturer";

export class CreateManufacturerService {
  constructor(private manufacturersRepository: IManufacturerRepository) {}

  async execute(dto: ICreateManufacturerDTO) {
    if (!dto) {
      return Error("You need to send the manufacturer`s name!");
    }

    const manufacturer = new Manufacturer(dto);

    return await this.manufacturersRepository.save(manufacturer);
  }
}
