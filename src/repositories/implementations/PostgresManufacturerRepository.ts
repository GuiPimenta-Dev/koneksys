import { IManufacturerRepository } from "../IManufacturerRepository";
import { Manufacturer } from "../../entities/Manufacturer";
import { IUpdateManufacturerDTO } from "../../useCases/Manufacturer/UpdateManufacturer/UpdateManufacturerDTO";

import client from "../../db";
import { Equipment } from "../../entities/Equipment";
const { Client } = require("pg");

export class PostgresManufacturersRepository
  implements IManufacturerRepository
{
  private db: typeof Client;
  constructor() {
    this.db = client;
  }

  async findById(id: string): Promise<string> {
    const { rows } = await this.db.query(
      "SELECT id FROM manufacturer WHERE id = $1",
      [id]
    );
    return rows[0];
  }

  async listEquipments(id: string): Promise<Equipment[]> {
    const { rows } = await this.db.query(
      "SELECT e.id, e.model, e.serial_number FROM manufacturer m \
      LEFT JOIN equipment e ON m.id = e.manufacturer_id \
      WHERE e.manufacturer_id = $1",
      [id]
    );
    return rows;
  }

  async save(manufacturer: Manufacturer): Promise<void> {
    this.db.query("INSERT INTO manufacturer VALUES ($1,$2)", [
      manufacturer.id,
      manufacturer.name,
    ]);
  }

  async listAll(): Promise<Manufacturer[]> {
    const { rows } = await this.db.query("SELECT id,name FROM manufacturer");
    return rows;
  }
  async listOne(id: string): Promise<Manufacturer> {
    const { rows } = await this.db.query(
      "SELECT id,name FROM manufacturer WHERE id = $1",
      [id]
    );
    return rows[0];
  }
  async update(dto: IUpdateManufacturerDTO): Promise<void> {
    this.db.query("UPDATE manufacturer SET name = $1 WHERE id = $2", [
      dto.name,
      dto.id,
    ]);
  }
  async delete(id: string): Promise<void> {
    this.db.query("DELETE FROM manufacturer WHERE id = $1", [id]);
  }
}
