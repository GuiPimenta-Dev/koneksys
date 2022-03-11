import { IManufacturerRepository } from "../../../repositories/IManufacturerRepository";

export class ListManufacturersUseCase {
  constructor(private manufacturersRepository: IManufacturerRepository) {}

  async execute() {
    return await this.manufacturersRepository.listAll();
  }
}
