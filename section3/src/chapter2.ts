// Unknown 타입 - 모든 타입의 슈퍼 타입
function unknownExam() {
  // 업 캐스팅
  let a: unknown = 1;
  let b: unknown = 'Hello';
  let c: unknown = true;
  let d: unknown = undefined;
  let e: unknown = null;
  let f: unknown = {};
  let g: unknown = [];
  let h: unknown = () => {};

  // 다운 캐스팅
  let unkownVar: unknown;

  // // 다운 캐스팅은 명시적으로 타입 단언을 사용해야 함
  // let num: number = unkownVar;
  // let str : string = unkownVar;
}

// Never 타입 - 모든 타입의 서브 타입(공집합), 어떤 타입도 다운 캐스팅 할 수 없음
// 불가능한 타입

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  // 업 캐스팅
  let num: number = neverFunc();
  let str: string = neverFunc();

  // // 다운 캐스팅
  // let neverVar: never = 10;
  // let neverVar2: never = 'Hello';
}

// Void 타입
function voidExam() {
  function voidFunc(): void {
    console.log('This function does not return anything.');
    // void는 undefined의 슈퍼 타입이므로 반환 가능
    // return undefined;
  }

  let voidVar: void = undefined;
}

// any 타입(타입 계층도를 무시하는 타입으로 웬만하면 사용하지 않는 것을 권장)
function anyExam() {
  let unkownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;

  anyVar = unkownVar; // any는 unknown에 다운 캐스팅 가능

  undefinedVar = anyVar; // any는 undefined에 다운 캐스팅 가능
}
