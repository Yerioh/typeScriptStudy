// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
}; // 같은 스코프 내에서 타입명이 중복되지 않도록 주의

let user1: User = {
  id: 1,
  name: "김지원",
  nickname: "YeRioh",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "의적",
};

// 인덱스 시그니처 : 키와 밸류의 규칙을 기준으로 객체의 type을 정의할 수 있는 문법
// 규칙을 위반하지 않으면 오류가 발생하지 않음 -> 빈객체를 넣어도 오류가 발생하지않음
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number; // 반드시 넣어야하는 프로퍼티가 있다면 따로 지정 가능(단, 인덱스 시그니처 문법의 타입과 일치해야함)
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
