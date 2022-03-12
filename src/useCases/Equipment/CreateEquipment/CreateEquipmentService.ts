import { IEquipmentRepository } from "../../../repositories/IEquipmentRepository";
import { ICreateEquipmentDTO } from "./CreateEquipmentDTO";
import { Equipment } from "../../../entities/Equipment";
import { IManufacturerRepository } from "../../../repositories/IManufacturerRepository";

export class CreateEquipmentService {
  constructor(
    private equipmentRepository: IEquipmentRepository,
    private manufacturerRepository: IManufacturerRepository
  ) {}

  async execute(dto: ICreateEquipmentDTO) {
    if (!dto.model) {
      return new Error("The Equipment must have a model!");
    }

    if (!dto.manufacturerId) {
      dto.manufacturerId = null;
    }

    if (dto.manufacturerId != null) {
      const manufacturer = await this.manufacturerRepository.findById(
        dto.manufacturerId
      );
      if (!manufacturer) {
        return new Error("This Manufacturer does not exists!");
      }
    }
    const equipment = new Equipment(dto);

    return await this.equipmentRepository.save(equipment);
  }
}
