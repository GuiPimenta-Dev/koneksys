import { IEquipmentRepository } from "../../../repositories/IEquipmentRepository";

export class ListEquipmentsService {
  constructor(private equipmentRepository: IEquipmentRepository) {}

  async execute() {
    return await this.equipmentRepository.listAll();
  }
}
