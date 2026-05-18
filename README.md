# TodoList Ver2

TodoList Ver2는 React와 Vite로 만든 간단한 할 일 관리 애플리케이션입니다. 사용자는 할 일을 추가하고, 완료 여부를 체크하고, 필요 없는 항목을 삭제할 수 있습니다. 검색 입력창을 통해 등록된 할 일 중 원하는 항목만 빠르게 찾을 수도 있습니다.

## 주요 기능

- 오늘 날짜 표시
- 새 Todo 항목 추가
- Enter 키로 Todo 빠른 등록
- Todo 완료 상태 체크 및 해제
- Todo 삭제
- 입력한 검색어 기준 Todo 필터링

## 화면 구성

- `Header`: 현재 날짜를 보여주는 상단 영역
- `TodoEditor`: 새 할 일을 입력하고 추가하는 영역
- `TodoList`: 전체 할 일 목록과 검색 입력을 담당하는 영역
- `TodoItem`: 개별 할 일의 체크박스, 내용, 날짜, 삭제 버튼을 표시하는 영역

## 실행 방법

```bash
npm install
npm run dev
```

개발 서버가 실행되면 터미널에 표시되는 로컬 주소로 접속해 앱을 확인할 수 있습니다.

## 프로젝트 특징

이 프로젝트는 React의 `useState`와 `useRef`를 사용해 기본적인 상태 관리 흐름을 연습하기 좋은 구조입니다. 컴포넌트를 기능별로 분리해 Todo 생성, 목록 렌더링, 검색, 수정, 삭제 로직을 각각 확인할 수 있습니다.

## 폴더 구조

```text
src/
  App.jsx
  App.css
  main.jsx
  index.css
  components/
    Header.jsx
    Header.css
    TodoEditor.jsx
    TodoEditor.css
    TodoList.jsx
    TodoList.css
    TodoItem.jsx
    TodoItem.css
```
