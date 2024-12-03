import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
  
:focus {
    outline: 0;
}
body, html {
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    width: 100vw;
    font-family: "Roboto", sans-serif;
    line-height: 1.6;
    position: relative;
  -webkit-font-smoothing: antialiased; /* Melhora a suavização das fontes no Chrome/Safari */

}

`