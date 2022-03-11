import { IEquipmentRepository } from "../IEquipmentRepository";
import { Equipment } from "../../entities/Equipment";
import { IUpdateEquipmentDTO } from "../../useCases/Equipment/UpdateEquipment/UpdateEquipmentDTO";

import client from "../../db";
import { Manufacturer } from "../../entities/Manufacturer";
const { Client } = require("pg");

export class PostgresEquipmentsRepository implements IEquipmentRepository {
  private db: typeof Client;
  constructor() {
    this.db = client;
  }

  async findById(id: string): Promise<string> {
    const { rows } = await this.db.query(
      "SELECT id FROM equipment WHERE id = $1",
      [id]
    );
    return rows[0];
  }

  async listOwner(id: string): Promise<Manufacturer> {
    const { rows } = await this.db.query(
      "SELECT m.id, name FROM manufacturer m \
      LEFT JOIN equipment e ON m.id = e.manufacturer_id \
      WHERE e.id = $1",
      [id]
    );
    return rows[0];
  }

  async save(equipment: Equipment): Promise<void> {
    await this.db.query("INSERT INTO equipment VALUES ($1,$2, $3, $4)", [
      equipment.id,
      equipment.model,
      equipment.serialNumber,
      equipment.manufacturerId,
    ]);
  }

  async listAll(): Promise<Equipment[]> {
    const { rows } = await this.db.query(
      "SELECT id,model,serial_number, manufacturer_id FROM equipment"
    );
    return rows;
  }
  async listOne(id: string): Promise<Equipment> {
    const { rows } = await this.db.query(
      "SELECT id, model, serial_number, manufacturer_id FROM equipment WHERE id = $1",
      [id]
    );
    return rows[0];
  }

  async update(dto: IUpdateEquipmentDTO): Promise<Equipment | Error> {
    const equipment = await this.listOne(dto.id);
    await this.db.query(
      "UPDATE equipment SET model = $1, serial_number = $2 ,manufacturer_id = $3 WHERE id = $4",
      [
        dto.model ? dto.model : equipment.model,
        dto.serialNumber ? dto.serialNumber : equipment.serialNumber,
        dto.manufacturerId,
        dto.id,
      ]
    );

    return this.listOne(dto.id);
  }
  async delete(id: string): Promise<void> {
    await this.db.query("DELETE FROM equipment WHERE id = $1", [id]);
  }
}
