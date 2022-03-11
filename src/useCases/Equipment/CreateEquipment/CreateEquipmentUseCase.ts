import { IEquipmentRepository } from "../../../repositories/IEquipmentRepository";
import { ICreateEquipmentDTO } from "./CreateEquipmentDTO";
import { Equipment } from "../../../models/Equipment";

export class CreateEquipmentUseCase {
  constructor(private equipmentRepository: IEquipmentRepository) {}

  async execute(data: ICreateEquipmentDTO) {
    const equipment = new Equipment(data);

    await this.equipmentRepository.save(equipment);
  }
}
