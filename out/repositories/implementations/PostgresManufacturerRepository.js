"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresManufacturersRepository = void 0;
const fc_1 = require("../../utils/fc");
const { Client } = require("pg");
class PostgresManufacturersRepository {
    constructor(client) {
        this.db = client;
    }
    async findById(id) {
        const { rows } = await this.db.query(fc_1.readQuery("selectManufacturer"), [id]);
        return rows[0];
    }
    async listEquipments(id) {
        const { rows } = await this.db.query(fc_1.readQuery("selectManufacturerEquipments"), [id]);
        return rows;
    }
    async save(manufacturer) {
        this.db.query(fc_1.readQuery("insertManufacturer"), [
            manufacturer.id,
            manufacturer.name,
        ]);
        return manufacturer;
    }
    async listAll() {
        const { rows } = await this.db.query(fc_1.readQuery("selectManufacturers"));
        return rows;
    }
    async listOne(id) {
        const { rows } = await this.db.query(fc_1.readQuery("selectManufacturer"), [id]);
        return rows[0];
    }
    async update(dto) {
        this.db.query(fc_1.readQuery("updateManufacturer"), [dto.name, dto.id]);
        return dto;
    }
    async delete(id) {
        this.db.query("DELETE FROM manufacturer WHERE id = $1", [id]);
    }
}
exports.PostgresManufacturersRepository = PostgresManufacturersRepository;
//# sourceMappingURL=PostgresManufacturerRepository.js.map