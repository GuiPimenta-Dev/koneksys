import { IManufacturerRepository } from "../../../repositories/IManufacturerRepository";

export class ListManufacturerUseCase {
  constructor(private manufacturerRepository: IManufacturerRepository) {}

  async execute(id: string) {
    return await this.manufacturerRepository.listOne(id);
  }
}
