// 조건부 타입
type A = number extends string ? string : number; // A는 number입니다.

type ObjA = {
  name: string;
};

type ObjB = {
  name: string;
  age: number;
};

type B = ObjB extends ObjA ? number : string; // B는 number입니다. ObjB는 ObjA의 모든 프로퍼티를 가지고 있기 때문에 ObjB는 ObjA의 서브타입입니다.

// 제네릭과 조건부 타입
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>; // varA는 string입니다.

let varB: StringNumberSwitch<string>; // varB는 number입니다.

// 오버로드 시그니쳐
function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
  if (typeof text === 'string') {
    return text.replaceAll(' ', '');
  } else {
    return undefined;
  }
}

let result = removeSpaces('He llo Worl d'); // result는 'HelloWorld'입니다. removeSpaces 함수는 문자열에서 모든 공백을 제거하는 기능을 합니다.
result.toUpperCase();

let result2 = removeSpaces(undefined); // result2는 undefined입니다. removeSpaces 함수는 문자열이 아닌 경우 undefined를 반환합니다.
