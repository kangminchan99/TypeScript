// infer - 조건부 타입에서 타입을 추론하는 방법
// inference -> 추론

type FuncA = () => string;

type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>;

type B = ReturnType<FuncB>;

type C = ReturnType<number>; // C는 never입니다. ReturnType은 함수 타입이 아닌 경우 never를 반환합니다.

// 예제

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이어야한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야한다.

type PromisA = PromiseUnpack<Promise<number>>;
// number

type PromisB = PromiseUnpack<Promise<string>>;
// string
