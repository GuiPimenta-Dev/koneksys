import { Equipment } from "../entities/Equipment";
import { IUpdateEquipmentDTO } from "../useCases/Equipment/UpdateEquipment/UpdateEquipmentDTO";
import { Manufacturer } from "../entities/Manufacturer";

export interface IEquipmentRepository {
  listAll(): Promise<Equipment[]>;
  listOne(id: string): Promise<Equipment>;
  findById(id: string): Promise<string>;
  listOwner(id: string): Promise<Manufacturer>;
  save(equipment: Equipment): Promise<Equipment>;
  update(dto: IUpdateEquipmentDTO): Promise<Equipment | Error>;
  delete(id: string): Promise<void>;
}
