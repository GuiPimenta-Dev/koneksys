import { Manufacturer } from "../models/Manufacturer";
import { IUpdateManufacturerDTO } from "../useCases/Manufacturer/UpdateManufacturer/UpdateManufacturerDTO";

export interface IManufacturerRepository {
  listAll(): Promise<Manufacturer[]>;
  listOne(id: string): Promise<Manufacturer>;
  save(manufacturer: Manufacturer): Promise<void>;
  update(dto: IUpdateManufacturerDTO): Promise<void>;
  delete(id: string): Promise<void>;
}
