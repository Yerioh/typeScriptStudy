// any
// 특정 변수의 타입을 우리가 확실히 모를 때 사용
let anyVar: any = 10;
anyVar = "Hello"; // 어떤 타입이라도 변수에 할당할 수 있음
anyVar = true;
anyVar = {};
anyVar = () => {};

// 특정타입의 메서드도 사용가능
anyVar.toUpperCase();

// 어떤타입에도 할당될 수 있음
// 단 실행시, 타입이 맞지 않다면 오류가 발생
let num: number = 10;
num = anyVar;

// unknown
// 마찬가지로 어떤 타입이라도 변수에 할당할 수 있음
let unknownVar: unknown

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// 메서드 사용불가
// unknownVar.toUpperCase() // 에러발생함

// 타입정제(타입 좁히기)의 과정을 거쳐야 활용 가능
if (typeof unknownVar === "number") {
  num = unknownVar;
}

// unknown 타입은 any타입의 단점을 보완하기에 타입을 확정짓지 못할때는 unknown을 사용하는 것이 안전함