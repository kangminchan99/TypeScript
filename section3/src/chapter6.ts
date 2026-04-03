// 타입 단언(Type Assertion) - 개발자가 컴파일러에게 특정 값이 특정 타입임을 명시적으로 알려주는 방법
type Person = {
  name: string;
  age: number;
};

// 타입 단언을 사용하여 객체를 특정 타입으로 간주
let person = {} as Person;
person.name = 'Alice';
person.age = 30;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: 'ming',
  color: 'orange',
  breed: 'poodle',
} as Dog;

// 타입 단언의 규칙
// 값 as 단언 <- 단언식
// A as B
// A가 B의 슈퍼 타입이거나 서브타입이어야 함
let num1 = 10 as never; // 10은 number, never는 모든 타입의 서브 타입이라 a가 b의 슈퍼 타입이므로 타입 단언이 가능
let num2 = 10 as unknown; // 10은 number, unknown은 모든 타입의 슈퍼 타입이라 a가 b의 서브 타입이므로 타입 단언이 가능

// let num3 = 10 as string; // 오류: 10은 number, string은 교집합이 없는 타입이므로 타입 단언이 불가능
let num3 = 10 as unknown as string; // 다중 단언 시 단언이 안되는 타입으로도 가능하나 좋은 방법이 아님

// const 단언

let num4 = 10 as const; // num4는 10이라는 리터럴 타입으로 추론됨

// 객체에 const 단언을 사용하면 모든 프로퍼티가 readonly가 되고, 객체 전체가 리터럴 타입으로 추론됨
let cat = {
  name: 'ming',
  color: 'orange',
} as const;

// cat.name = 'tiger'; // 오류: cat 객체의 name 프로퍼티는 readonly이므로 값을 변경할 수 없음

// Non-null 단언 - 값이 null 또는 undefined가 아님을 컴파일러에게 알려주는 방법
type Post = {
  title: string;
  // 익명이면 author가 없을 수 있음
  author?: string;
};

let post: Post = {
  title: 'TypeScript',
  author: 'Alice',
};

const len: number = post.author!.length; // post.author가 string 또는 undefined 타입이지만, !를 사용하여 post.author가 null 또는 undefined가 아님을 컴파일러에게 알려줌
