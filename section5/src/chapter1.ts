// 인터페이스의 상속(확장)

interface Animal {
  name: string;
  age: number;
}

// type Animal = {
//   name: string;
//   age: number;
// }

interface Dog extends Animal {
  // name: "hello"; // 인터페이스 확장 시, 부모 인터페이스의 프로퍼티를 재정의할 수 있습니다(원본 타입의 서브 타입으로만).
  breed: string;
}

const dog: Dog = {
  name: 'Buddy',
  age: 3,
  breed: 'Golden Retriever',
};

interface Cat extends Animal {
  color: string;
}

interface Chicken extends Animal {
  eggCount: number;
}

// 다중 인터페이스 확장
interface Pet extends Dog, Cat {
  owner: string;
}

const pet: Pet = {
  name: 'Max',
  age: 5,
  breed: 'Labrador',
  color: 'Black',
  owner: 'Alice',
};
