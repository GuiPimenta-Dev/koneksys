import { IEquipmentRepository } from "../../../repositories/IEquipmentRepository";
import { IUpdateEquipmentDTO } from "./UpdateEquipmentDTO";
import { IManufacturerRepository } from "../../../repositories/IManufacturerRepository";

export class UpdateEquipmentService {
  constructor(
    private equipmentRepository: IEquipmentRepository,
    private manufacturerEquipmentRepository: IManufacturerRepository
  ) {}

  async execute(dto: IUpdateEquipmentDTO) {
    if (dto.manufacturerId === undefined) {
      return new Error("You need to send the manufacturerId!");
    }

    const equipment = await this.equipmentRepository.findById(dto.id);

    if (!equipment) {
      return new Error("This Equipment does not exists!");
    }

    const manufacturer = await this.manufacturerEquipmentRepository.findById(
      dto.manufacturerId
    );

    if (!manufacturer && dto.manufacturerId !== null) {
      return new Error("This Manufacturer does not exists!");
    }

    return await this.equipmentRepository.update(dto);
  }
}
