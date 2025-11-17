// void -> 아무것도 없음을 의미하는 타입

function func1(): string {
  return "Hello";
}

function func2(): void {
  console.log("Hello");
}

let a: void; // undefined 외의 값은 넣을 수 없음
// a = 1 
// a= "Hello"
// a = {}
a = undefined;

// 함수의 반환 값을 undefiend로 사용하지 않는 이유 
function func3(): undefined {
  console.log("Hello")
  return;
}

// never -> 존재하지 않는 불가능한 타입
// 정상적으로 종료되지 않는 함수의 반환값으로 시용하기 위해 존재
function func4(): void {
  while (true) {}
}

function func5(): never {
  throw new Error();
}

let b: never; // 어떤 값도 담을 수 없다