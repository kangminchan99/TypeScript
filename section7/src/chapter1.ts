import { get } from 'node:http';

// 첫번째 사례 - 타입 변수 여러개 선언 가능
function swap<T, U>(a: T, b: U): [U, T] {
  return [b, a];
}

const [a, b] = swap('1', 2);

// 두번째 사례 - 데이터 타입이 튜플이고 첫번째 요소의 타입을 T로 지정하면 값에 따라 T의 타입이 결정됨
function returnFirstValue<T>(data: [T, ...unknown[]]): T {
  return data[0];
}

let num = returnFirstValue([1, 2, 3]);

let bool = returnFirstValue([true, 'b', 'c', 3]);

// 세번째 사례 - 제네릭 제약 조건 - T extends { length: number }는 T가 length 프로퍼티를 가지고 있어야 한다는 것을 의미
interface InterfaceA {
  length: number;
}

interface InterfaceB extends InterfaceA {}

// getLength 함수는 T가 length 프로퍼티를 가지고 있는 타입이어야 한다는 제약 조건을 가지고 있음
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength('Hello'); // 5
let var2 = getLength([1, 2, 3]); // 3
let var3 = getLength({ length: 10 }); // 10

// let var4 = getLength(123); // 에러 발생 - number 타입은 length 프로퍼티가 없기 때문에 에러 발생
