export class Person {
  constructor(name) {
    this.name = name;
    this.move = this.move.bind(this);
  }

  move() {
    console.log(`${this.name} is moving`);
  }
}
