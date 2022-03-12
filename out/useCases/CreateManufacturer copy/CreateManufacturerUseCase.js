"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManufacturerUseCase = void 0;
const Manufacturer_1 = require("../../entities/Manufacturer");
class CreateManufacturerUseCase {
  constructor(manufacturersRepository, mailProvider) {
    this.manufacturersRepository = manufacturersRepository;
    this.mailProvider = mailProvider;
  }
  async execute(data) {
    const manufacturerAlreadyExists =
      await this.manufacturersRepository.findByName(data.name);
    if (manufacturerAlreadyExists) {
      return new Error("Manufacturer already exists.");
    }
    const manufacturer = new Manufacturer_1.Manufacturer(data);
    await this.manufacturersRepository.save(manufacturer);
    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: "guialvespimenta27@gmail.com",
      },
      from: {
        name: "Equipe do Meu App",
        email: "guialves2pimenta27@gmail.com",
      },
      subject: "Seja bem-vindo à plataforma",
      body: "<p>Você já pode fazer login em nossa plataforma.</p>",
    });
  }
}
exports.CreateManufacturerUseCase = CreateManufacturerUseCase;
//# sourceMappingURL=CreateManufacturerUseCase.js.map
