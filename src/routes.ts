import { DeleteEquipmentController } from "./useCases/Equipment/DeleteEquipment/DeleteEquipmentController";
import { Router } from "express";
import { createManufacturerController } from "./useCases/Manufacturer/CreateManufacturer";
import { listManufacturersController } from "./useCases/Manufacturer/ListManufacturers";
import { listManufacturerController } from "./useCases/Manufacturer/ListManufacturer";
import { updateManufacturerController } from "./useCases/Manufacturer/UpdateManufacturer";

import { createEquipmentController } from "./useCases/Equipment/CreateEquipment";
import { listEquipmentController } from "./useCases/Equipment/ListEquipment";
import { listEquipmentsController } from "./useCases/Equipment/ListEquipments";
import { deleteManufacturerController } from "./useCases/Manufacturer/DeleteManufacturer";
import { updateEquipmentController } from "./useCases/Equipment/UpdateEquipment";
import { deleteEquipmentController } from "./useCases/Equipment/DeleteEquipment";
import { listManufacturerEquipmentsController } from "./useCases/Manufacturer/ListManufacturerEquipments";

const router = Router();

router.post("/manufacturer", (req, res) => {
  return createManufacturerController.handle(req, res);
});

router.get("/manufacturer", (_, res) => {
  return listManufacturersController.handle(res);
});

router.get("/manufacturer/:id", (req, res) => {
  return listManufacturerController.handle(req, res);
});

router.get("/manufacturer/equipments/:id", (req, res) => {
  return listManufacturerEquipmentsController.handle(req, res);
});

router.put("/manufacturer/:id", (req, res) => {
  return updateManufacturerController.handle(req, res);
});

router.delete("/manufacturer/:id", (req, res) => {
  return deleteManufacturerController.handle(req, res);
});

router.post("/equipment", (req, res) => {
  return createEquipmentController.handle(req, res);
});
router.get("/equipment", (_, res) => {
  return listEquipmentsController.handle(res);
});
router.get("/equipment/:id", (req, res) => {
  return listEquipmentController.handle(req, res);
});
router.put("/equipment/:id", (req, res) => {
  return updateEquipmentController.handle(req, res);
});
router.delete("/equipment/:id", (req, res) => {
  return deleteEquipmentController.handle(req, res);
});
export { router };
