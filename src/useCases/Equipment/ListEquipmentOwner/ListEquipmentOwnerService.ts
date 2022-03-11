import { IEquipmentRepository } from "../../../repositories/IEquipmentRepository";

export class ListEquipmentOwnerService {
  constructor(private equipmentRepository: IEquipmentRepository) {}

  async execute(id: string) {
    const equipment = await this.equipmentRepository.findById(id);

    if (!equipment) {
      return new Error("This Equipment does not exists!");
    }
    return await this.equipmentRepository.listOwner(id);
  }
}
