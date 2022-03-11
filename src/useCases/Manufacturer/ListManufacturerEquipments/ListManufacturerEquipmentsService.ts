import { IManufacturerRepository } from "../../../repositories/IManufacturerRepository";

export class ListManufacturerEquipmentsService {
  constructor(private manufacturerRepository: IManufacturerRepository) {}

  async execute(id: string) {
    return await this.manufacturerRepository.listEquipments(id);
  }
}
