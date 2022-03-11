"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresManufacturersRepository = void 0;
class PostgresManufacturersRepository {
    constructor() {
        this.manufacturer = [];
        this.equipment = [];
    }
    async findByName(name) {
        const manufacturer = this.manufacturer.find((manufacturer) => manufacturer.name === name);
        return manufacturer;
    }
    async save(manufacturer) {
        this.manufacturer.push(manufacturer);
    }
    async findEquipmentBySerialNumber(serialNumber) {
        const equipment = this.equipment.find((equipment) => equipment.serialNumber === serialNumber);
        return equipment;
    }
    async saveEquipment(equipment) {
        this.equipment.push(equipment);
    }
}
exports.PostgresManufacturersRepository = PostgresManufacturersRepository;
//# sourceMappingURL=PostgresManufacturerRepository copy.js.map