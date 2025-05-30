/** @jsxImportSource @emotion/react */
import { Global, css, useTheme } from '@emotion/react';
import { ThemeType } from './themes';

export const GlobalStyle = () => {
  const theme = useTheme() as ThemeType;

  return (
    <Global
      styles={css`
        *, *::before, *::after {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
          background-color: ${theme.background};
          color: ${theme.text};
          font-family: 'Pretendard', sans-serif;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        h2 {
          font-family: "Zen Kaku Gothic New", sans-serif;
          font-style: normal;
          font-weight: 400;
        }
      `}
    />
  );
};
