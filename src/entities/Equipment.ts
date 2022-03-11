import { v4 } from "uuid";
const crypto = require("crypto");

export class Equipment {
  public readonly id: string;
  public readonly serialNumber: string;

  public model: string;
  public manufacturerId: string;

  constructor(props: Omit<Equipment, "id" | "serialNumber">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = v4();
      this.serialNumber = crypto.randomBytes(7).toString("hex");
    }
  }
}
