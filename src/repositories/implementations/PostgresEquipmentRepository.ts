import { IEquipmentRepository } from "../IEquipmentRepository";
import { Equipment } from "../../entities/Equipment";
import { IUpdateEquipmentDTO } from "../../useCases/Equipment/UpdateEquipment/UpdateEquipmentDTO";

import { Manufacturer } from "../../entities/Manufacturer";
const { Client } = require("pg");

export class PostgresEquipmentsRepository implements IEquipmentRepository {
  private db: typeof Client;
  constructor(client) {
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
      'SELECT m.id, name FROM manufacturer m \
      LEFT JOIN equipment e ON m.id = e."manufacturerId" \
      WHERE e.id = $1',
      [id]
    );
    return rows[0];
  }

  async save(equipment: Equipment): Promise<Equipment> {
    await this.db.query("INSERT INTO equipment VALUES ($1,$2, $3, $4)", [
      equipment.id,
      equipment.model,
      equipment.serialNumber,
      equipment.manufacturerId,
    ]);
    return equipment;
  }

  async listAll(): Promise<Equipment[]> {
    const { rows } = await this.db.query(
      'SELECT id,model, "serialNumber", "manufacturerId" FROM equipment'
    );
    return rows;
  }
  async listOne(id: string): Promise<Equipment> {
    const { rows } = await this.db.query(
      'SELECT id, model,  "serialNumber", "manufacturerId" FROM equipment WHERE id = $1',
      [id]
    );
    return rows[0];
  }

  async update(dto: IUpdateEquipmentDTO): Promise<Equipment | Error> {
    const { model, serialNumber } = await this.listOne(dto.id);
    dto.model = dto.model ? dto.model : model;
    dto.serialNumber = dto.serialNumber ? dto.serialNumber : serialNumber;
    await this.db.query(
      'UPDATE equipment SET model = $1, "serialNumber" = $2 ,"manufacturerId" = $3 WHERE id = $4',
      [dto.model, dto.serialNumber, dto.manufacturerId, dto.id]
    );

    return dto;
  }
  async delete(id: string): Promise<void> {
    await this.db.query("DELETE FROM equipment WHERE id = $1", [id]);
  }
}
