import { IEquipmentRepository } from "../../../repositories/IEquipmentRepository";

export class ListEquipmentUseCase {
  constructor(private equipmentRepository: IEquipmentRepository) {}

  async execute(id: string) {
    return await this.equipmentRepository.listOne(id);
  }
}
