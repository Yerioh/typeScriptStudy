## 타입스크립트 시작하기

1. node.js 설치
2. npm init -> 일단 기본값으로 설정
3. @types/node 패키지 설치
4. tpyescript 패키지 설치(글로벌)
5. ts-node 혹은 tsx(20버전 이상) 패키지 설치(글로벌) -> ts 파일을 바로 실행 가능하게 하는 패키지

## 타입스크립트 컴파일러 옵션 설정하기

`tsc --init` : tsconfig.json 파일 설정

#### 컴파일러 설정 값

- include: 컴파일할 ts파일의 범위를 설정
- compilerOptions: 컴파일러의 옵션들
  - target: 컴파일 결과 생성되는 js 버전 설정
  - module: 모듈 시스템 설정(commonjs나 es모듈 시스템 등)
  - ouDir: 컴파일 결과 생성되는 js 파일들이 생성될 위치
  - strict: 컴파일을 엄격하게 할지 결정
  - moduleDetection: 각 파일을 어떻게 바라볼지 결정 => 타입스크립트는 기본적으로 모든 파일을 전역파일(모듈)로 취급
    - force: 각 파일을 로컬 모듈로 취급
- ts-node: ts-node 패키지와 관련된 설정
  - esm: es모듈 시스템으로 사용하기위한 설정
