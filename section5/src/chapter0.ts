// 인터페이스

//
interface Person {
  readonly name: string;
  age?: number;
  // 함수 시그니처 오버로딩
  sayHello(): void;
  sayHello(a: number, b: number): void;
}

// 인터페이스는 타입 별칭과 달리 인터섹션 타입을 지원하지 않습니다.
type Type1 = number | string;
type Type2 = number & string;

const person: Person = {
  name: 'Alice',
  sayHello: function () {
    console.log(`안녕하세요, 제 이름은 ${this.name}입니다.`);
  },
};

// person.name = 'Bob'; // 오류: name은 읽기 전용입니다.

person.sayHello();
person.sayHello(1, 2);
