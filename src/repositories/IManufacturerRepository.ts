import { Manufacturer } from "../entities/Manufacturer";
import { IUpdateManufacturerDTO } from "../useCases/Manufacturer/UpdateManufacturer/UpdateManufacturerDTO";
import { Equipment } from "../entities/Equipment";

export interface IManufacturerRepository {
  listAll(): Promise<Manufacturer[]>;
  listOne(id: string): Promise<Manufacturer>;
  listEquipments(id: string): Promise<Equipment[]>;
  findById(id: string): Promise<string>;
  save(manufacturer: Manufacturer): Promise<void>;
  update(dto: IUpdateManufacturerDTO): Promise<void>;
  delete(id: string): Promise<void>;
}
