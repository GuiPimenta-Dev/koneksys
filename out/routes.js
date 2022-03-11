"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CreateManufacturer_1 = require("./useCases/Manufacturer/CreateManufacturer");
const ListManufacturers_1 = require("./useCases/Manufacturer/ListManufacturers");
const ListManufacturer_1 = require("./useCases/Manufacturer/ListManufacturer");
const UpdateManufacturer_1 = require("./useCases/Manufacturer/UpdateManufacturer");
const CreateEquipment_1 = require("./useCases/Equipment/CreateEquipment");
const ListEquipment_1 = require("./useCases/Equipment/ListEquipment");
const ListEquipments_1 = require("./useCases/Equipment/ListEquipments");
const DeleteManufacturer_1 = require("./useCases/Manufacturer/DeleteManufacturer");
const UpdateEquipment_1 = require("./useCases/Equipment/UpdateEquipment");
const DeleteEquipment_1 = require("./useCases/Equipment/DeleteEquipment");
const ListManufacturerEquipments_1 = require("./useCases/Manufacturer/ListManufacturerEquipments");
const router = express_1.Router();
exports.router = router;
router.post("/manufacturer", (req, res) => {
    return CreateManufacturer_1.createManufacturerController.handle(req, res);
});
router.get("/manufacturer", (_, res) => {
    return ListManufacturers_1.listManufacturersController.handle(res);
});
router.get("/manufacturer/:id", (req, res) => {
    return ListManufacturer_1.listManufacturerController.handle(req, res);
});
router.get("/manufacturer/equipments/:id", (req, res) => {
    return ListManufacturerEquipments_1.listManufacturerEquipmentsController.handle(req, res);
});
router.put("/manufacturer/:id", (req, res) => {
    return UpdateManufacturer_1.updateManufacturerController.handle(req, res);
});
router.delete("/manufacturer/:id", (req, res) => {
    return DeleteManufacturer_1.deleteManufacturerController.handle(req, res);
});
router.post("/equipment", (req, res) => {
    return CreateEquipment_1.createEquipmentController.handle(req, res);
});
router.get("/equipment", (_, res) => {
    return ListEquipments_1.listEquipmentsController.handle(res);
});
router.get("/equipment/:id", (req, res) => {
    return ListEquipment_1.listEquipmentController.handle(req, res);
});
router.put("/equipment/:id", (req, res) => {
    return UpdateEquipment_1.updateEquipmentController.handle(req, res);
});
router.delete("/equipment/:id", (req, res) => {
    return DeleteEquipment_1.deleteEquipmentController.handle(req, res);
});
//# sourceMappingURL=routes.js.map