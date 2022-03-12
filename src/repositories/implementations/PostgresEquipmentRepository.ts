import { IEquipmentRepository } from "../IEquipmentRepository";
import { Equipment } from "../../entities/Equipment";
import { IUpdateEquipmentDTO } from "../../useCases/Equipment/UpdateEquipment/UpdateEquipmentDTO";
import { Manufacturer } from "../../entities/Manufacturer";
import { readQuery } from "../../utils/fc";
const { Client } = require("pg");

export class PostgresEquipmentsRepository implements IEquipmentRepository {
  private db: typeof Client;
  constructor(client) {
    this.db = client;
  }

  async findById(id: string): Promise<string> {
    const { rows } = await this.db.query(readQuery("selectEquipment"), [id]);
    return rows[0];
  }

  async listOwner(id: string): Promise<Manufacturer> {
    const { rows } = await this.db.query(readQuery("selectOwner"), [id]);
    return rows[0];
  }

  async save(equipment: Equipment): Promise<Equipment> {
    await this.db.query(readQuery("insertEquipment"), [
      equipment.id,
      equipment.model,
      equipment.serialNumber,
      equipment.manufacturerId,
    ]);
    return equipment;
  }

  async listAll(): Promise<Equipment[]> {
    const { rows } = await this.db.query(readQuery("selectEquipments"));
    return rows;
  }
  async listOne(id: string): Promise<Equipment> {
    const { rows } = await this.db.query(readQuery("selectEquipment"), [id]);
    return rows[0];
  }

  async update(dto: IUpdateEquipmentDTO): Promise<Equipment | Error> {
    const { model, serialNumber } = await this.listOne(dto.id);
    dto.model = dto.model ? dto.model : model;
    dto.serialNumber = dto.serialNumber ? dto.serialNumber : serialNumber;
    await this.db.query(readQuery("updateEquipment"), [
      dto.model,
      dto.serialNumber,
      dto.manufacturerId,
      dto.id,
    ]);

    return dto;
  }
  async delete(id: string): Promise<void> {
    await this.db.query(readQuery("deleteEquipment"), [id]);
  }
}
