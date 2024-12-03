import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "../theme/defaultTheme";
import { GlobalStyle } from "../theme/global";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "../ProvideActive.js";
 import {ProdutosProviderItem} from '../ProductsProvider.js'
import {AppRouter} from '../Router.jsx'
export function App(){


  return (
     <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter basename="/Develiry/">
      <ProdutosProviderItem>

     <ProductProvider> 
      <AppRouter/>
      </ProductProvider>
      </ProdutosProviderItem> 

      <GlobalStyle/>
      </BrowserRouter>
     </ThemeProvider>
  )
}