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
    async save(equipment) {
        this.db.query("INSERT INTO equipment VALUES ($1,$2, $3)", [
            equipment.id,
            equipment.model,
            equipment.serialNumber,
        ]);
    }
    async listAll() {
        const { rows } = await this.db.query("SELECT id,model,serialnumber FROM equipment");
        return rows;
    }
    async listOne(id) {
        const { rows } = await this.db.query("SELECT id, model, serialnumber FROM equipment WHERE id = $1", [id]);
        return rows[0];
    }
    async update(dto) {
        this.db.query("UPDATE equipment SET model = $1 WHERE id = $2", [
            dto.model,
            dto.id,
        ]);
    }
    async delete(id) {
        this.db.query("DELETE FROM equipment WHERE id = $1", [id]);
    }
}
exports.PostgresEquipmentsRepository = PostgresEquipmentsRepository;
//# sourceMappingURL=PostgresEquipmentRepository.js.map