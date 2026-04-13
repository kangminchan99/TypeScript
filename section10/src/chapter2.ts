// Exclude<T, U> - T에서 U를 제거하는 타입

type Exclude<T, U> = T extends U ? never : T;
// 1단계
// Exclude<string, boolean> |
// Exclude<boolean, boolean>

// 2단계
// string |
// never

// 최종적으로는
// string | never(공집합) 이므로 결과적으로 string이 됩니다.

// A - string
type A = Exclude<string | boolean, boolean>;

// Extract<T, U> - T에서 U에 해당하는 타입만 추출하는 타입

type Extract<T, U> = T extends U ? T : never;

// B - boolean
type B = Extract<string | boolean, boolean>;

// ReturnType<T> - 함수 타입에서 반환 타입을 추출하는 타입

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function funcA() {
  return 'hello';
}

function funcB() {
  return 123;
}

type ReturnA = ReturnType<typeof funcA>; // ReturnA는 string입니다. funcA 함수의 반환 타입이 string이기 때문입니다.

type ReturnB = ReturnType<typeof funcB>; // ReturnB는 number입니다. funcB 함수의 반환 타입이 number이기 때문입니다.
