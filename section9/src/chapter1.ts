// 분산적인 조건부 타입
type StringNumberSwitch<T> = T extends number ? string : number;

// 분산 방지
// type StringNumberSwitch<T> = [T] extends [number] ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>; // c는 string | number입니다.
// StringNumberSwitch<number>;
// StringNumberSwitch<string>;

let d: StringNumberSwitch<number | string | boolean>;
// 1단계 - 분리후 유니온으로 묶임
// StringNumberSwitch<number> |
// StringNumberSwitch<string> |
// StringNumberSwitch<boolean> |

// 2단계
// number
// string
// number

// 3단계 - 최종 결과
// number | string

// 실용적인 예제
type Exclude<T, U> = T extends U ? never : T; // Exclude는 T에서 U에 할당 가능한 타입을 제거하는 조건부 타입입니다.

type A = Exclude<number | string | boolean, string>;

// 1단계 - 분리후 유니온으로 묶임
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>

// 2단계
// number
// never
// boolean

// 3단계 - 최종 결과
// number | never | boolean => number | boolean

type Extract<T, U> = T extends U ? T : never; // Extract는 T에서 U에 할당 가능한 타입만 추출하는 조건부 타입입니다.

type B = Extract<number | string | boolean, string>;

// 1단계 - 분리후 유니온으로 묶임
// Extract<number, string> |
// Extract<string, string> |
// Extract<boolean, string>

// 2단계
// never
// string
// never

// 3단계 - 최종 결과
// never | string | never => string