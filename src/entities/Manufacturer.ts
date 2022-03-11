import { v4 } from "uuid";

export class Manufacturer {
  public readonly id: string;

  public name: string;

  constructor(props: Omit<Manufacturer, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = v4();
    }
  }
}
