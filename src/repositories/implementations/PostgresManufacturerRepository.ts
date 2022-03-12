import { IManufacturerRepository } from "../IManufacturerRepository";
import { Manufacturer } from "../../entities/Manufacturer";
import { IUpdateManufacturerDTO } from "../../useCases/Manufacturer/UpdateManufacturer/UpdateManufacturerDTO";
import { Equipment } from "../../entities/Equipment";
import { readQuery } from "../../utils/fc";
const { Client } = require("pg");

export class PostgresManufacturersRepository
  implements IManufacturerRepository
{
  private db: typeof Client;
  constructor(client) {
    this.db = client;
  }

  async findById(id: string): Promise<string> {
    const { rows } = await this.db.query(readQuery("selectManufacturer"), [id]);
    return rows[0];
  }

  async listEquipments(id: string): Promise<Equipment[]> {
    const { rows } = await this.db.query(
      readQuery("selectManufacturerEquipments"),
      [id]
    );
    return rows;
  }

  async save(manufacturer: Manufacturer): Promise<Manufacturer> {
    this.db.query(readQuery("insertManufacturer"), [
      manufacturer.id,
      manufacturer.name,
    ]);
    return manufacturer;
  }

  async listAll(): Promise<Manufacturer[]> {
    const { rows } = await this.db.query(readQuery("selectManufacturers"));
    return rows;
  }
  async listOne(id: string): Promise<Manufacturer> {
    const { rows } = await this.db.query(readQuery("selectManufacturer"), [id]);
    return rows[0];
  }
  async update(dto: IUpdateManufacturerDTO): Promise<Manufacturer> {
    this.db.query(readQuery("updateManufacturer"), [dto.name, dto.id]);
    return dto;
  }
  async delete(id: string): Promise<void> {
    this.db.query(readQuery("deleteManufacturer"), [id]);
  }
}
