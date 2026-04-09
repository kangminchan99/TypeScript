// 제네릭
// 제네릭 함수 - 함수의 매개변수나 반환값의 타입을 호출 시점에 결정할 수 있도록 하는 기능
// T - 타입 변수
function func<T>(value: T): T {
  return value;
}

// 인수로 전달한 값 10인 number타입으로 잘 추론이 됨
let num = func(10);
// 인수로 전달한 값 true인 boolean타입으로 잘 추론이 됨
let bool = func(true);
// 인수로 전달한 값 'Hello'인 string타입으로 잘 추론이 됨
let str = func('Hello');

let arr = func([1, 2, 3]);
// 튜플 타입으로도 가능
let arr1 = func<[number, number, number]>([1, 2, 3]);
