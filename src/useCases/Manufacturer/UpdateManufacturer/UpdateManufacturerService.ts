import { IManufacturerRepository } from "../../../repositories/IManufacturerRepository";
import { IUpdateManufacturerDTO } from "./UpdateManufacturerDTO";

export class UpdateManufacturerService {
  constructor(private manufacturerRepository: IManufacturerRepository) {}

  async execute(dto: IUpdateManufacturerDTO) {
    const manufacturer = await this.manufacturerRepository.findById(dto.id);

    if (!manufacturer) {
      return new Error("This Manufacturer does not exists!");
    }
    return await this.manufacturerRepository.update(dto);
  }
}
