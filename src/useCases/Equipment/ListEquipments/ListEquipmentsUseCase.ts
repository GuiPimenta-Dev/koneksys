import { IEquipmentRepository } from "../../../repositories/IEquipmentRepository";

export class ListEquipmentsUseCase {
  constructor(private equipmentRepository: IEquipmentRepository) {}

  async execute() {
    return await this.equipmentRepository.listAll();
  }
}
