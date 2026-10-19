// CSS in JS
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* Reset some default styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: gray;
  }

  body, button, input {
    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
    transition: filter 0.3s;

    &:hover {
      filter: brightness(1.2);
      transition: filter 0.3s;
    }
  }
`;