import { IManufacturerRepository } from "../../../repositories/IManufacturerRepository";
import { IUpdateManufacturerDTO } from "./UpdateManufacturerDTO";

export class UpdateManufacturerUseCase {
  constructor(private manufacturersRepository: IManufacturerRepository) {}

  async execute(data: IUpdateManufacturerDTO) {
    await this.manufacturersRepository.update(data);
  }
}
