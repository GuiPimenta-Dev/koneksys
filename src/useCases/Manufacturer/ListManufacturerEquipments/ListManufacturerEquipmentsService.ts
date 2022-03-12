import { IManufacturerRepository } from "../../../repositories/IManufacturerRepository";

export class ListManufacturerEquipmentsService {
  constructor(private manufacturerRepository: IManufacturerRepository) {}

  async execute(id: string) {
    const manufacturer = await this.manufacturerRepository.findById(id);

    if (!manufacturer) {
      return new Error("This Manufacturer does not exists!");
    }
    return await this.manufacturerRepository.listEquipments(id);
  }
}
