import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layout/defaultLayout/index';
import { GetStartPage } from './Pages/GetStarted';
import { Home } from './Pages';
import { DescriptionHome } from './Pages/Description';

export function AppRouter() {
  return (
    <Routes>
      {/* Rota principal usando o DefaultLayout */}
      <Route path="/" element={<DefaultLayout />}>
      <Route path='start' element={<GetStartPage/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<DescriptionHome/>}/>

        {/* Rota filha para o Header */}
      </Route>
    </Routes>
  );
}
