const Hero = function(race, name, language) {
    this.race = race,
    this.name = name,
    this.language = language
}

Hero.prototype.speak = function(){
  console.log(`Имя: ${this.name}, Язык: ${this.language}`)
}


const Orc = function(name, language){
    Hero.call(this, 'Orc', name, language)
    this.weapon = 'sword'
}


Orc.prototype = Object.create(Hero.prototype);
Orc.prototype.constructor = Orc;

Orc.prototype.hint = function(){
    console.log('Удар мечом')
}


const Elfe = function(name, language){
    Hero.call(this, 'Elfe', name, language)
    this.spell = 'Огонь'
}

Elfe.prototype = Object.create(Hero.prototype);
Elfe.prototype.constructor = Elfe;

Elfe.prototype.CreateSpell = function(){
    console.log('Каст закленания')
}

const orc = new Orc('sam','orc')
const elfe = new Elfe('gary', 'elfe')


