/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

import { COLORS } from '../helpers/colors.ts';

class Computer {
  public cpu: string = 'cpu - not defined';
  public ram: string = 'ram - not defined';
  public storage: string = 'storage - not defined';
  public gpu?: string;

  displayConfiguration(): void {
    console.log(`Configuración de la computadora
            CPU: ${this.cpu}
            RAM: ${this.ram}
            Almacenamiento: ${this.storage}
            GPU: ${this.gpu ?? 'No tiene GPU'}
            `);
  }
}

class ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  setCPU(cpt: string): ComputerBuilder {
    this.computer.cpu = cpt;
    // regresar la instancia de mi clase actual(ComputerBuilder)
    return this;
  }

  setRAM(ram: string): ComputerBuilder {
    this.computer.ram = ram;
    return this;
  }

  setStorage(storage: string): ComputerBuilder {
    this.computer.storage = storage;
    return this;
  }

  setGPU(gpu: string): ComputerBuilder {
    this.computer.gpu = gpu;
    return this;
  }

  build(): Computer {
    return this.computer;
  }
}

function main() {
  const basicComputer = new ComputerBuilder()
    .setCPU('Intel i5')
    .setRAM('8GB')
    .setStorage('256GB SSD')
    .build();

  const gamingComputer = new ComputerBuilder()
    .setCPU('AMD Ryzen 9')
    .setRAM('32GB')
    .setStorage('1TB SSD')
    .setGPU('NVIDIA RTX 3080')
    .build();

  console.log(`%cComputadora para gaming:`, COLORS.red);
  gamingComputer.displayConfiguration();

  console.log(`%cComputadora básica:`, COLORS.orange);
  basicComputer.displayConfiguration();
}

main();
