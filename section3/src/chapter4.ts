// 대수 타입
// 여러개의 타입을 합성해서 새롭게 만들어낸 타입
// 합집합 타입과 교집합 타입이 존재

// 합집합 타입 (Union Type)

let a: string | number; // a는 string 또는 number 타입이 될 수 있음

a = 'Hello';
a = 10;
// a = true; // 오류: a는 string 또는 number 타입만 할당 가능

let arr: (string | number | boolean)[] = [10, '10', true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person; // Dog 또는 Person 타입이 될 수 있는 Union1 타입

let union1: Union1;

union1 = {
  name: 'tiger',
  color: 'orange',
};

union1 = {
  name: 'Alice',
  language: 'English',
};

union1 = {
  name: 'Alice',
  color: 'orange',
  language: 'English',
};

// 교집합 타입 (Intersection Type)

let variable: number & string; // variable은 number와 string 타입을 모두 만족해야 하는 교집합 타입이므로 어떤 값도 할당할 수 없음 (이건 never 타입임)

type Intersection1 = Dog & Person; // Dog와 Person 타입을 모두 만족해야 하는 Intersection1 타입

let intersection1: Intersection1;

// 교집합 타입의 예시
intersection1 = {
  name: 'tiger',
  color: 'orange',
  language: 'English',
};
