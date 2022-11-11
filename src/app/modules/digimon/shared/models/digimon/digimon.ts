export class Digimon {
  number: number;
  name: string;
  stage: string;
  type: string;
  attribute: string;
  memory: number;
  equipSlots: number;
  lv50HP: number;
  lv50SP: number;
  lv50Atk: number;
  lv50Def: number;
  lv50Int: number;
  lv50Spd: number;
  img: string;

  constructor(
    number: number,
    name: string,
    stage: string,
    type: string,
    attribute: string,
    memory: number,
    equipSlots: number,
    lv50HP: number,
    lv50SP: number,
    lv50Atk: number,
    lv50Def: number,
    lv50Int: number,
    lv50Spd: number,
    img: string) {
      this.number = number;
      this.name = name;
      this.stage = stage;
      this.type = type;
      this.attribute = attribute;
      this.memory = memory;
      this.equipSlots = equipSlots,
      this.lv50HP = lv50HP,
      this.lv50SP = lv50SP,
      this.lv50Atk = lv50Atk,
      this.lv50Def = lv50Def,
      this.lv50Int = lv50Int,
      this.lv50Spd = lv50Spd,
      this.img = img
  }

}

// this describes a single isntance of a digimon