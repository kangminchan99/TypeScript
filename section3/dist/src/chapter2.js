// Unknown 타입 - 모든 타입의 슈퍼 타입
function unknownExam() {
    // 업 캐스팅
    let a = 1;
    let b = 'Hello';
    let c = true;
    let d = undefined;
    let e = null;
    let f = {};
    let g = [];
    let h = () => { };
    // 다운 캐스팅
    let unkownVar;
    // // 다운 캐스팅은 명시적으로 타입 단언을 사용해야 함
    // let num: number = unkownVar;
    // let str : string = unkownVar;
}
// Never 타입 - 모든 타입의 서브 타입(공집합), 어떤 타입도 다운 캐스팅 할 수 없음
// 불가능한 타입
function neverExam() {
    function neverFunc() {
        while (true) { }
    }
    // 업 캐스팅
    let num = neverFunc();
    let str = neverFunc();
    // // 다운 캐스팅
    // let neverVar: never = 10;
    // let neverVar2: never = 'Hello';
}
// Void 타입
function voidExam() {
    function voidFunc() {
        console.log('This function does not return anything.');
        // void는 undefined의 슈퍼 타입이므로 반환 가능
        // return undefined;
    }
    let voidVar = undefined;
}
// any 타입(타입 계층도를 무시하는 타입으로 웬만하면 사용하지 않는 것을 권장)
function anyExam() {
    let unkownVar;
    let anyVar;
    let undefinedVar;
    anyVar = unkownVar; // any는 unknown에 다운 캐스팅 가능
    undefinedVar = anyVar; // any는 undefined에 다운 캐스팅 가능
}
export {};
