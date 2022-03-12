import { IManufacturerRepository } from "../../../repositories/IManufacturerRepository";

export class DeleteManufacturerService {
  constructor(private manufacturerRepository: IManufacturerRepository) {}

  async execute(id: string) {
    const manufacturer = await this.manufacturerRepository.findById(id);

    if (!manufacturer) {
      return new Error("This Manufacturer does not exists!");
    }
    await this.manufacturerRepository.delete(id);
  }
}
