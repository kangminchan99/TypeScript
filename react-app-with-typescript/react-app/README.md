# React + TypeScript + Vite (React Compiler)

## 프로젝트 소개

이 프로젝트는 **Vite** 기반의 **React + TypeScript** 앱으로, **React Compiler**가 활성화되어 있습니다.

## 프로젝트 생성 방법

아래 명령어로 프로젝트를 생성했습니다:

```bash
npm create vite@latest
```

프로젝트 생성 시 선택한 옵션:

- **Framework**: React
- **Variant**: TypeScript + React Compiler

## 기술 스택

| 기술                          | 버전    |
| ----------------------------- | ------- |
| React                         | ^19.2.4 |
| TypeScript                    | ~6.0.2  |
| Vite                          | ^8.0.4  |
| React Compiler (babel-plugin) | ^1.0.0  |
| ESLint                        | ^9.39.4 |

## 프로젝트 구조

```
react-app/
├── index.html            # 진입 HTML
├── package.json          # 의존성 및 스크립트
├── vite.config.ts        # Vite 설정 (React Compiler 포함)
├── tsconfig.json         # TypeScript 설정
├── tsconfig.app.json     # 앱 TypeScript 설정
├── tsconfig.node.json    # Node TypeScript 설정
├── eslint.config.js      # ESLint 설정
├── public/               # 정적 파일
└── src/
    ├── main.tsx          # 앱 진입점
    ├── App.tsx           # 루트 컴포넌트
    ├── App.css           # 앱 스타일
    ├── index.css         # 글로벌 스타일
    └── assets/           # 이미지, SVG 등 에셋
```

## 시작하기

### 1. 의존성 설치

```bash
cd react-app-with-typescript/react-app
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

실행 후 브라우저에서 `http://localhost:5173` 으로 접속합니다.

### 3. 프로덕션 빌드

```bash
npm run build
```

### 4. 빌드 결과 미리보기

```bash
npm run preview
```

## 사용 가능한 스크립트

| 명령어            | 설명                                   |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Vite 개발 서버 실행 (HMR 지원)         |
| `npm run build`   | TypeScript 컴파일 + Vite 프로덕션 빌드 |
| `npm run lint`    | ESLint 코드 검사                       |
| `npm run preview` | 빌드된 결과물 로컬 미리보기            |

## React Compiler

이 프로젝트에는 [React Compiler](https://react.dev/learn/react-compiler)가 활성화되어 있습니다.  
`vite.config.ts`에서 `@rolldown/plugin-babel`과 `babel-plugin-react-compiler`를 통해 설정됩니다.

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';

export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
});
```

> **참고**: React Compiler는 개발 및 빌드 성능에 영향을 줄 수 있습니다.

## ESLint 설정 확장

프로덕션 앱을 개발하는 경우, 타입 인식 린트 규칙을 활성화하는 것을 권장합니다:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
