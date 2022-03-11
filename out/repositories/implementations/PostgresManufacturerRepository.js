"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresManufacturersRepository = void 0;
const db_1 = __importDefault(require("../../db"));
const { Client } = require("pg");
class PostgresManufacturersRepository {
    constructor() {
        this.db = db_1.default;
    }
    async findById(id) {
        const { rows } = await this.db.query("SELECT id FROM manufacturer WHERE id = $1", [id]);
        return rows[0];
    }
    async listEquipments(id) {
        const { rows } = await this.db.query("SELECT e.id, e.model, e.serial_number FROM manufacturer m \
      LEFT JOIN equipment e ON m.id = e.manufacturer_id \
      WHERE e.manufacturer_id = $1", [id]);
        return rows;
    }
    async save(manufacturer) {
        this.db.query("INSERT INTO manufacturer VALUES ($1,$2)", [
            manufacturer.id,
            manufacturer.name,
        ]);
    }
    async listAll() {
        const { rows } = await this.db.query("SELECT id,name FROM manufacturer");
        return rows;
    }
    async listOne(id) {
        const { rows } = await this.db.query("SELECT id,name FROM manufacturer WHERE id = $1", [id]);
        return rows[0];
    }
    async update(dto) {
        this.db.query("UPDATE manufacturer SET name = $1 WHERE id = $2", [
            dto.name,
            dto.id,
        ]);
    }
    async delete(id) {
        this.db.query("DELETE FROM manufacturer WHERE id = $1", [id]);
    }
}
exports.PostgresManufacturersRepository = PostgresManufacturersRepository;
//# sourceMappingURL=PostgresManufacturerRepository.js.map