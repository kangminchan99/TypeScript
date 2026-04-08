// 인터페이스와 클래스

// 인터페이스 정의 시 무조건 public
interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  // name: string;
  // moveSpeed: number;

  constructor(
    public name: string,
    public moveSpeed: number,
  ) {
    // this.name = name;
    // this.moveSpeed = moveSpeed;
  }

  move() {
    console.log(`${this.name} is moving at speed ${this.moveSpeed}.`);
  }
}
