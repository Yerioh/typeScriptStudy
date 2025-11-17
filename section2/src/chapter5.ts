// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2
}
// 할당하지 않는다면 0부터 순차적으로 할당됨
// enum Role {
//   ADMIN, // 0
//   USER, // 1
//   GUEST // 2
// }


// 첫 항목에 할당이 되어있다면 해당 값부터 순차적으로 할당됨
// enum Role {
//   ADMIN = 10, // 10
//   USER, // 11
//   GUEST // 12
// }

// 중간에 할당이 되어있다면
// enum Role {
//   ADMIN, // 0
//   USER = 10, // 10
//   GUEST // 11
// }

// 문자열 할당 가능
enum Language  {
  korean = "ko",
  english = "en"
}

const user1 = {
  name: "김지원",
  role: Role.ADMIN, // 관리자 = 0
  language: Language.korean
}

const user2 = {
  name: "김철수",
  role: Role.USER, // 일반 유저 = 1
  language: Language.english
}

const user3 = {
  name: "김영희",
  role: Role.GUEST,// 게스트 = 2
  language: Language.korean
}

console.log(user1, user2, user3)