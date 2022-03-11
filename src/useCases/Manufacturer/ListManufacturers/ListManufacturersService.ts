import { IManufacturerRepository } from "../../../repositories/IManufacturerRepository";

export class ListManufacturersService {
  constructor(private manufacturersRepository: IManufacturerRepository) {}

  async execute() {
    return await this.manufacturersRepository.listAll();
  }
}
