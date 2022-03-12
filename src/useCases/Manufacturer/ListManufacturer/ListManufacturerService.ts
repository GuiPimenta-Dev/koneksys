import { IManufacturerRepository } from "../../../repositories/IManufacturerRepository";

export class ListManufacturerService {
  constructor(private manufacturerRepository: IManufacturerRepository) {}

  async execute(id: string) {
    const manufacturer = await this.manufacturerRepository.findById(id);

    if (!manufacturer) {
      return new Error("This Manufacturer does not exists!");
    }
    return await this.manufacturerRepository.listOne(id);
  }
}
