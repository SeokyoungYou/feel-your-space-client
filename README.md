# Feel your space
*프로젝트의 기반 기술을 더 학습한 후에 다시 개발하기 위해 현재는 잠시 멈춤 상태인 저장소입니다.*
## 프로젝트 소개
+ 유튜브에 업로드된 음악, asmr 등 "듣기"만을 위한 영상들을 분류하고 추천하여 고객의 공간에 적합한 플레이리스트를 제공
+ 서비스 타겟: 재택 근무자, 휴식 시 음악을 듣는 사람 등
## 프로젝트 배경
유튜브 홈페이지에서 플레이리스트를 선택할 때 아래와 같은 불편함이 있었음
1. 매번 비슷한 플레이리스트만 듣게 됨
+ 동일한 검색어 사용 시, 유튜브 알고리즘에 의해 유사한 영상들만 검색됨
+ 사용자가 검색하는 음악 카테고리가 한정되어 있어 다양한 장르의 청취 경험이 어려움
2. 유튜브의 재생목록 추가 기능이 음악 저장 및 검색에 적합하지 않음
+ 유튜브의 재생목록 추가 기능은 영상 나열에 불과하여, 많은 영상 저장 시 원하는 플레이리스트를 찾기가 어려움
+ 유튜브는 동영상 시청에 유튜브 뮤직은 음악 감상에 보편화되어 구독이나 재생목록 만들기로는 플레이리스트 동영상 관리를 최적화하기 힘듦
## 프로젝트 구현 예정 기능 (Solution)
1. 검색 결과물 sorting 기능
+ 영상 시간, 조회수, 게시 날짜, 사용자의 조회 여부 등에 따라 정렬
2. 카테고리 추천 기능
+ 검색 시 카테고리 추천
+ 사용자 정보(현재 시간, 날씨, 위치 등) 기반 카테고리 추천
+ 사용자 커스터마이징 카테고리 만들기 ex) 좋아하는 가수
3. 즐겨찾기 및 코멘트 기능
+ 좋아하는 영상 즐겨찾기 기능 > 카테고리 기반 sorting
+ 나의 한 줄 코멘트

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

## 구현이 완료된 기능들
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

