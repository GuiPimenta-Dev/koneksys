import { IEquipmentRepository } from "../../../repositories/IEquipmentRepository";
import { IUpdateEquipmentDTO } from "./UpdateEquipmentDTO";
import { Equipment } from "../../../models/Equipment";

export class UpdateEquipmentUseCase {
  constructor(private equipmentRepository: IEquipmentRepository) {}

  async execute(dto: IUpdateEquipmentDTO) {
    await this.equipmentRepository.update(dto);
  }
}
