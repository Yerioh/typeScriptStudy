// object
// 구조적 타입 시스템 : 구조를 기준으로 타입을 지정함
let user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "김지원",
}; // 객체 리터럴 타입

let user2: {
  id?: number; // 선택적 프로퍼티(optional property): 사용하지 않아도 됨
  name: string;
} = {
  name: "홍길동",
};

let config: {
  readonly apiKey: string; // 읽기 전용으로 재할당 불가능
} = {
  apiKey: "My API KEY",
};
