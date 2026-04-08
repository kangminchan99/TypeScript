// 선언 합침

// 타입으로 선언 시 동일한 이름으로 선언하면 에러가 발생한다.
// type Person = {
//   name: string;
// };

// type Person = {
//   age: string;
// };

// 인터페이스로 선언 시 동일한 이름으로 선언하면 자동으로 합쳐진다.
interface Person {
  name: string;
}

interface Person {
  // name: number; // 에러 발생 - 반드시 동일한 타입으로만 가능
  age: number;
}

interface Developer extends Person {
  name: 'hello';
}

const person: Person = {
  name: 'Alice',
  age: 30,
};

// 모듈 보강
interface Lib {
  version: string;
  breakingChanges: string[];
}

// c가 새로 추가가 필요한 경우
interface Lib {
  c: string;
}

const lib: Lib = {
  version: '1.0.0',
  breakingChanges: [],
  c: 'hello', // c가 새로 추가가 필요한 경우
};
