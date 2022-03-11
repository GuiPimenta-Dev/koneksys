import { IEquipmentRepository } from "../IEquipmentRepository";
import { Equipment } from "../../models/Equipment";
import { IUpdateEquipmentDTO } from "../../useCases/Equipment/UpdateEquipment/UpdateEquipmentDTO";

import client from "../../db";
const { Client } = require("pg");

export class PostgresEquipmentsRepository implements IEquipmentRepository {
  private db: typeof Client;
  constructor() {
    this.db = client;
  }

  async save(equipment: Equipment): Promise<void> {
    this.db.query("INSERT INTO equipment VALUES ($1,$2, $3)", [
      equipment.id,
      equipment.model,
      equipment.serialNumber,
    ]);
  }

  async listAll(): Promise<Equipment[]> {
    const { rows } = await this.db.query(
      "SELECT id,model,serialnumber FROM equipment"
    );
    return rows;
  }
  async listOne(id: string): Promise<Equipment> {
    const { rows } = await this.db.query(
      "SELECT id, model, serialnumber FROM equipment WHERE id = $1",
      [id]
    );
    return rows[0];
  }

  async update(dto: IUpdateEquipmentDTO): Promise<void> {
    this.db.query("UPDATE equipment SET model = $1 WHERE id = $2", [
      dto.model,
      dto.id,
    ]);
  }
  async delete(id: string): Promise<void> {
    this.db.query("DELETE FROM equipment WHERE id = $1", [id]);
  }
}
