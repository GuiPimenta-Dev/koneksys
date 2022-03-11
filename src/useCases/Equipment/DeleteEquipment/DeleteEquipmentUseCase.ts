import { IEquipmentRepository } from "../../../repositories/IEquipmentRepository";

export class DeleteEquipmentUseCase {
  constructor(private equipmentRepository: IEquipmentRepository) {}

  async execute(id: string) {
    await this.equipmentRepository.delete(id);
  }
}
