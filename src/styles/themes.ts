export const lightTheme = {
  background: '#fff0f5',
  text: '#333333',
  primary: '#f06292',
  primaryHover: '#ec407a',
  buttonText: '#ffffff',
  secondary: '#9e9e9e',
  secondaryHover: '#757575',

  //cardBg: '#e8f5e9',
  cardBg: '#e4fbff',

  //cardBorder: '#4caf50',
  cardBorder: '#87CEEB',

  //cardHoverBg: '#e8f5e9',
  cardHoverBg: '#e4fbff',

  //cardBorderHover: '#388e3c',
  cardBorderHover: '#87CEEB',

  cardText: '#333333',
  cardDetailText: '#555555',
  cardShadow: 'rgba(0, 0, 0, 0.1)',

  success: '#4caf50',
  error: '#f44336',
  border: '#ddd',
  alt: '#f48fb1',        
  altHover: '#ec407a',
};

export const darkTheme = {
  background: '#121212',
  text: '#ffffff',
  primary: '#bb86fc',
  primaryHover: '#9b67d3',
  buttonText: '#ffffff',
  secondary: '#616161',
  secondaryHover: '#424242',

  cardBg: '#2c2c40',
  cardBorder: '#ba68c8',
  cardBorderHover: '#ba68c8',
  cardHoverBg: '#392f4d',
  cardText: '#ffffff',
  cardDetailText: '#dddddd',
  cardShadow: 'rgba(0, 0, 0, 0.3)',

  success: '#81c784',
  error: '#ef5350',
  border: '#444',
  alt: '#ba68c8',         
  altHover: '#ab47bc',
};

export type ThemeType = typeof lightTheme;
