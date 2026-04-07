// 함수 타입 호환성
// 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
// 1. 반환값의 타입이 호환되는가
// 2. 매개변수의 타입이 호환되는가

// 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

// A는 B보다 반환값이 더 넓은 타입이므로 A를 B로 취급하는 것은 문제가 없다.
// 하지만 B를 A로 취급하는 것은 문제가 있다. B는 A보다 반환값이 더 좁은 타입이므로 B를 A로 취급하는 것은 문제가 있다.
a = b;
// b = a;

// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// 매개변수를 기준으로 판단할 경우 업캐스팅이 안됨
// c = d;
// C 타입을 D 타입으로 취급하는건 문제가 없다.
d = c;

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name, dog.color);
};

// animalFunc = dogFunc;
dogFunc = animalFunc;

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  // console.log(animal.color);
};

let testFunc2 = (dog: Dog) => {
  console.log(dog.name, dog.color);
};

// 2-2 매개변수의 개수가 다를 때
type E = (a: number, b: number) => void;
type F = (a: number) => void;

let func1: E = (a, b) => {};
let func2: F = (a) => {};


func1 = func2;
// func2 = func1; // func2는 func1보다 매개변수가 더 적으므로 func2를 func1로 취급하는 것은 문제가 있다. 하지만 func1을 func2로 취급하는 것은 문제가 없다.