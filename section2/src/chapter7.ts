// void
// 함수에서 아무것도 반환하지 않는 경우, 반환 타입으로 void를 사용할 수 있습니다.
function func1(): string {
  return 'Hello, World!';
}

function func2(): void {
  console.log('This function does not return anything.');
}

let a: void;
// a = 1;
// a = 'Hello';
// a = true;
// a = undefined; // void 타입은 오직 undefined와 null만 할당할 수 있음

// never
// 불가능한 타입

// 무한 루프를 도는 함수라 반환하는 거 자체가 모순이고 절대 불가능 할 때
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error('This function always throws an error.');
}

let b: never;

let anyVar: any;

// a = 1;
// a = {};
// a = 'Hello';
// a = true;
// a = undefined;
// a = null;
// a = anyVar; // never 타입은 어떤 타입도 할당할 수 없음
