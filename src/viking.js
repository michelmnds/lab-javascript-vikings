// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damageTaken) {
    this.health -= damageTaken;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damageTaken) {
    this.health -= damageTaken;

    if (this.health > 0) {
      return `${this.name} has received ${damageTaken} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damageTaken) {
    this.health -= damageTaken;

    if (this.health > 0) {
      return `A Saxon has received ${damageTaken} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

const viking1 = new Viking("vik1", 10, 20);
const viking2 = new Viking("vik2", 10, 20);
const saxon1 = new Saxon(10, 20);
const saxon2 = new Saxon(10, 20);
// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let viking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let saxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    const damage = saxon.receiveDamage(viking.strength);

    if (saxon.health <= 0) {
      this.saxonArmy.pop(saxon);
    }

    return damage;
  }

  saxonAttack() {
    let viking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let saxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    const damage = viking.receiveDamage(saxon.strength);

    if (viking.health <= 0) {
      this.vikingArmy.pop(viking);
    }

    return damage;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
