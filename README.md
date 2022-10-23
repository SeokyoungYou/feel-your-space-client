# Feel your space
*프로젝트의 기반 기술을 더 학습한 후에 다시 개발하기 위해 현재는 잠시 멈춤 상태인 저장소입니다.*
## 프로젝트 소개


- Youtube API server: https://github.com/SeokyoungYou/feel-your-space-server

## Library & Framework
### FE
- NextJS
  - 도입 배경: https://velog.io/@skyu_dev/NextJS
- Tailwind CSS
  - 도입 배경: https://velog.io/@skyu_dev/기획3-Next.js-프로젝트의-CSS-라이브러리-선정하기
- Recoil
### BE
- NextJS for user data
- GraphQL for Youtube API
  - Google에서 제공하는 Youtube DATA REST API -> GraphQL로 변경하여 사용하기 위해 도입
  - 도입 배경: https://velog.io/@skyu_dev/GraphQL-왜-사용해야-할까-YouTube-API로-나만의-API-만들기
  - 구현 서버: https://github.com/SeokyoungYou/feel-your-space-server
## Tools
- Figma
https://velog.io/@skyu_dev/GraphQL-왜-사용해야-할까-YouTube-API로-나만의-API-만들기

## 구현 기능
### 1. 방문 시 시작 화면
Recoil을 사용하여 사용자의 웹사이트 최초 방문 여부를 전역 변수로 `isHomeIntro`로 상태 관리하여 `HomeIntro` component 렌더링
`/` Home route에 최초 접근시에만 인트로 화면 렌더링됨
![HomeIntro](https://user-images.githubusercontent.com/79842380/197392885-f4dee806-472a-461f-b702-7e4c9c02ae82.gif)
+ 개선 필요 사항: HomeIntro 이미지의 렌더링 시간을 단축하거나 로딩 컴포넌트를 추가하여 홈화면이 미리 보이는 오류 방지


### 2. 반응형 웹사이트
Tailwind CSS를 사용하여 구현
![Responsive](https://user-images.githubusercontent.com/79842380/197393182-ab4b7c84-7ad6-4449-8088-d1ac4f2f07fb.gif)


### 3. 영상 hover 시 미리듣기 구현
react-youtube(https://www.npmjs.com/package/react-youtube) 패키지에서 제공하는 동영상 플레이어 컴포넌트를 사용하여, `videoId`를 전역 변수로 관리하여 미리듣기 구현
해당 영상 클릭시 영상의 유튜브 링크로 연결됨
![prelistening](https://user-images.githubusercontent.com/79842380/197393262-446c5485-fd01-4ebf-b854-d78278a334f8.gif)

