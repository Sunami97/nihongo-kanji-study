// src/styles/emotion.d.ts (파일 새로 생성)
import '@emotion/react';
import { ThemeType } from './themes';

declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}
