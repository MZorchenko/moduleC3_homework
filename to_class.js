class ElectricalAppliance {
    constructor(name, power){
      this.name = name;
      this.power = power;
      this.isSwitchedOn = false;
    }
    // метод, который определяет прибор как включенный в розетку
    turnOn() {
      console.log(this.name + " is plugged!");
      this.isSwitchedOn = true;
    }
    
    // метод, который определяет прибор как выключеный из розетки
    turnOff() {
      console.log(this.name + " is turnOffged!");
      this.isSwitchedOn = false;
    }
  }
  
  // Прибор 1
  class Lamp extends ElectricalAppliance {
    constructor (name, brand, power, bulbType) {
      super(name, power);
      this.brand = brand;
      this.bulbType = bulbType;
      this.isSwitchedOn = true;
    }
  }
  
  // Прибор 2
  class Computer extends ElectricalAppliance {
    constructor(name, brand, power, type, functionality) {
      super(name, power); 
      this.brand = brand;
      this.type = type;
      this.functionality = functionality;
      this.isSwitchedOn = false;
    }
  }
  
  // экземпляр лампы
  const tableLamp = new Lamp("Table lamp", "Xiaomi", 5, "LED");
  
  // экземпляр компьютера
  const homePC = new Computer("Table PC", "Intel", 120, "stationary", "for work");
  
  // отключить лампу из розетки
  tableLamp.turnOff();
  
  // включить homePC в розетку
  homePC.turnOn();
  
  // результат
  console.log(homePC)
  console.log(tableLamp)