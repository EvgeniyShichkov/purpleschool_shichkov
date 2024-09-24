
// приставка Class нужны для того что бы именна не пересикались с таской 5-oop 
class HeroClass {
  constructor(race, name, language) {
    this.race = race ?? 'Human';
    this.name = name ?? 'Player';
    this.language = language ?? 'English';
  }

   #speak() {
    console.log(`Имя: ${this.name}, Язык: ${this.language}`);
  }

  speak() {
    this.#speak()
  }
}

class OrcClass extends HeroClass {
  constructor(race, name, language, weapon) {
    super(race, name, language);
    this.weapon = weapon ?? 'Sword';
  }

  hint() {
    console.log("Орк бьет мечом");
  }

  speak() {
    console.log(
      `Орк ликует свое имя: ${this.name}, на языке: ${this.language}`
    );
  }
}

class ElfeClass extends HeroClass {
  constructor(race, name, language, spell) {
    super(race, name, language);
    this.spell = spell ?? 'Fireball';
  }

  CreateSpell() {
    console.log("Эльф кастует заклинание");
  }

  speak() {
    console.log(
      `Эльф произнося свое имя: ${this.name}, на языке: ${this.language} пританцовывает))`
    );
  }
}

const heroClass = new HeroClass('Hero', 'Adam', 'arab');
const orcClass = new OrcClass('Orc', 'Pitter', 'Orcs', 'Mace');
const elfeClass = new ElfeClass('Elfe', 'Edik', 'Elfes', 'Electricity');
