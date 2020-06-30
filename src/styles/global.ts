import { createGlobalStyle } from 'styled-components';
import background from '../assets/background.svg';

export default createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  }
 body {
  // for reference about background in styled component literals
  /*background: #f0f0f5 url(${background}) no-repeat 70% top;*/
  background: #f0f0f5;
  -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;

  }

  #root {
 /* max-width: 940px;
  margin: 0 auto;
  padding: 40px 20px;*/
  }

  button {
  cursor: pointer;
  }
`;
