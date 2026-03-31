// any
// 특정 변수의 타입을 우리가 확실히 모를때
let anyVar = 10;
anyVar = 'Hello';
anyVar = true;
anyVar = {};
anyVar = () => { };
let num = 10;
num = anyVar;
// unknown
// any와 비슷하지만, 좀 더 안전한 타입
let unknownVar = 10;
unknownVar = 'Hello';
unknownVar = true;
unknownVar = {};
unknownVar = () => { };
// num = unknownVar; // unknown 타입은 any와 달리, 다른 타입에 할당할 수 없음
if (typeof unknownVar === 'number') {
    num = unknownVar; // 타입 가드로 unknown 타입을 number로 좁혀서 할당 가능
}
export {};
