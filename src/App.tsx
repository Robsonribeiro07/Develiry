import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "../theme/defaultTheme";
import { GlobalStyle } from "../theme/global";
import { BrowserRouter } from "react-router-dom";
 
import {AppRouter} from '../Router.jsx'
export function App(){


  return (
     <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter basename="/Start">
      <AppRouter/>

      <GlobalStyle/>
      </BrowserRouter>
     </ThemeProvider>
  )
}