// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "yerioh"];

let boolArr: Array<boolean> = [true, false, false];

// 다양한 타입의 배열
let multiArr: (string | number)[] = [1, "Hello"];

// 다차원 배열
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플 : 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "2", true];

// 튜플은 컴파일할 때 배열로 인식하기 때문에 배열 메서드를 사용해도 오류가 발생하지 않음
// -> 메서드 사용시 주의해야함
