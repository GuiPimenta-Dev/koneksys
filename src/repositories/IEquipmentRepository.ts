import { Equipment } from "../models/Equipment";
import { IUpdateEquipmentDTO } from "../useCases/Equipment/UpdateEquipment/UpdateEquipmentDTO";

export interface IEquipmentRepository {
  listAll(): Promise<Equipment[]>;
  listOne(id: string): Promise<Equipment>;
  save(equipment: Equipment): Promise<void>;
  update(dto: IUpdateEquipmentDTO): Promise<void>;
  delete(id: string): Promise<void>;
}
