import { IManufacturerRepository } from "../../../repositories/IManufacturerRepository";

export class DeleteManufacturerUseCase {
  constructor(private manufacturersRepository: IManufacturerRepository) {}

  async execute(id: string) {
    await this.manufacturersRepository.delete(id);
  }
}
