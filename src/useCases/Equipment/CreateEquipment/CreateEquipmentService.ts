import { IEquipmentRepository } from "../../../repositories/IEquipmentRepository";
import { ICreateEquipmentDTO } from "./CreateEquipmentDTO";
import { Equipment } from "../../../entities/Equipment";
import { IManufacturerRepository } from "../../../repositories/IManufacturerRepository";

export class CreateEquipmentService {
  constructor(
    private equipmentRepository: IEquipmentRepository,
    private manufacturerRepository: IManufacturerRepository
  ) {}

  async execute(data: ICreateEquipmentDTO) {
    if (!data.model) {
      return new Error("The Equipment must have a model!");
    }

    if (data.manufacturerId != null) {
      const manufacturer = await this.manufacturerRepository.findById(
        data.manufacturerId
      );
      if (!manufacturer) {
        return new Error("This Manufacturer does not exists!");
      }
    }
    const equipment = new Equipment(data);

    return await this.equipmentRepository.save(equipment);
  }
}
