"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresManufacturersRepository = void 0;
const { Client } = require("pg");
class PostgresManufacturersRepository {
    constructor(client) {
        this.db = client;
    }
    async findById(id) {
        const { rows } = await this.db.query("SELECT id FROM manufacturer WHERE id = $1", [id]);
        return rows[0];
    }
    async listEquipments(id) {
        const { rows } = await this.db.query('SELECT e.id, e.model, e."serialNumber" FROM manufacturer m \
      LEFT JOIN equipment e ON m.id = e."manufacturerId" \
      WHERE e."manufacturerId" = $1', [id]);
        return rows;
    }
    async save(manufacturer) {
        this.db.query("INSERT INTO manufacturer VALUES ($1,$2)", [
            manufacturer.id,
            manufacturer.name,
        ]);
        return manufacturer;
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