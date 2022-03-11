"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresEquipmentsRepository = void 0;
class PostgresEquipmentsRepository {
    constructor() {
        this.manufacturer = [];
        this.equipment = [];
    }
    async findManufacturerByName(name) {
        const manufacturer = this.manufacturer.find((manufacturer) => manufacturer.name === name);
        return manufacturer;
    }
    async saveManufacturer(manufacturer) {
        this.manufacturer.push(manufacturer);
    }
    async findEquipmentBySerialNumber(serialNumber) {
        const equipment = this.equipment.find((equipment) => equipment.serialNumber === serialNumber);
        return equipment;
    }
    async saveEquipment(equipment) {
        this.equipment.push(equipment);
    }
    async list() {
        return this.equipment;
    }
}
exports.PostgresEquipmentsRepository = PostgresEquipmentsRepository;
//# sourceMappingURL=PostgresRepository.js.map