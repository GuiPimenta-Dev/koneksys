"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresEquipmentsRepository = void 0;
const db_1 = __importDefault(require("../../db"));
const { Client } = require("pg");
class PostgresEquipmentsRepository {
    constructor() {
        this.db = db_1.default;
    }
    async findById(id) {
        const { rows } = await this.db.query("SELECT id FROM equipment WHERE id = $1", [id]);
        return rows[0];
    }
    async listOwner(id) {
        const { rows } = await this.db.query("SELECT m.id, name FROM manufacturer m \
      LEFT JOIN equipment e ON m.id = e.manufacturer_id \
      WHERE e.id = $1", [id]);
        return rows[0];
    }
    async save(equipment) {
        await this.db.query("INSERT INTO equipment VALUES ($1,$2, $3, $4)", [
            equipment.id,
            equipment.model,
            equipment.serialNumber,
            equipment.manufacturerId,
        ]);
    }
    async listAll() {
        const { rows } = await this.db.query("SELECT id,model,serial_number, manufacturer_id FROM equipment");
        return rows;
    }
    async listOne(id) {
        const { rows } = await this.db.query("SELECT id, model, serial_number, manufacturer_id FROM equipment WHERE id = $1", [id]);
        return rows[0];
    }
    async update(dto) {
        const equipment = await this.listOne(dto.id);
        await this.db.query("UPDATE equipment SET model = $1, serial_number = $2 ,manufacturer_id = $3 WHERE id = $4", [
            dto.model ? dto.model : equipment.model,
            dto.serialNumber ? dto.serialNumber : equipment.serialNumber,
            dto.manufacturerId,
            dto.id,
        ]);
        return this.listOne(dto.id);
    }
    async delete(id) {
        await this.db.query("DELETE FROM equipment WHERE id = $1", [id]);
    }
}
exports.PostgresEquipmentsRepository = PostgresEquipmentsRepository;
//# sourceMappingURL=PostgresEquipmentRepository.js.map