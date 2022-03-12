"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresEquipmentsRepository = void 0;
const { Client } = require("pg");
class PostgresEquipmentsRepository {
    constructor(client) {
        this.db = client;
    }
    async findById(id) {
        const { rows } = await this.db.query("SELECT id FROM equipment WHERE id = $1", [id]);
        return rows[0];
    }
    async listOwner(id) {
        const { rows } = await this.db.query('SELECT m.id, name FROM manufacturer m \
      LEFT JOIN equipment e ON m.id = e."manufacturerId" \
      WHERE e.id = $1', [id]);
        return rows[0];
    }
    async save(equipment) {
        await this.db.query("INSERT INTO equipment VALUES ($1,$2, $3, $4)", [
            equipment.id,
            equipment.model,
            equipment.serialNumber,
            equipment.manufacturerId,
        ]);
        return equipment;
    }
    async listAll() {
        const { rows } = await this.db.query('SELECT id,model, "serialNumber", "manufacturerId" FROM equipment');
        return rows;
    }
    async listOne(id) {
        const { rows } = await this.db.query('SELECT id, model,  "serialNumber", "manufacturerId" FROM equipment WHERE id = $1', [id]);
        return rows[0];
    }
    async update(dto) {
        const { model, serialNumber } = await this.listOne(dto.id);
        dto.model = dto.model ? dto.model : model;
        dto.serialNumber = dto.serialNumber ? dto.serialNumber : serialNumber;
        await this.db.query('UPDATE equipment SET model = $1, "serialNumber" = $2 ,"manufacturerId" = $3 WHERE id = $4', [dto.model, dto.serialNumber, dto.manufacturerId, dto.id]);
        return dto;
    }
    async delete(id) {
        await this.db.query("DELETE FROM equipment WHERE id = $1", [id]);
    }
}
exports.PostgresEquipmentsRepository = PostgresEquipmentsRepository;
//# sourceMappingURL=PostgresEquipmentRepository.js.map