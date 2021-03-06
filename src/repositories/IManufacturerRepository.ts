import { Manufacturer } from "../entities/Manufacturer";
import { IUpdateManufacturerDTO } from "../useCases/Manufacturer/UpdateManufacturer/UpdateManufacturerDTO";
import { Equipment } from "../entities/Equipment";

export interface IManufacturerRepository {
  listAll(): Promise<Manufacturer[]>;
  listOne(id: string): Promise<Manufacturer>;
  listEquipments(id: string): Promise<Equipment[]>;
  findById(id: string): Promise<string>;
  save(manufacturer: Manufacturer): Promise<Manufacturer>;
  update(dto: IUpdateManufacturerDTO): Promise<Manufacturer>;
  delete(id: string): Promise<void>;
}
