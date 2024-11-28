import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layout/defaultLayout/index';
import { GetStartPage } from './Pages/GetStarted';
import { Home } from './Pages';

export function AppRouter() {
  return (
    <Routes>
      {/* Rota principal usando o DefaultLayout */}
      <Route path="/" element={<DefaultLayout />}>
      <Route path='start' element={<GetStartPage/>}/>
      <Route path='home' element={<Home/>}/>

        {/* Rota filha para o Header */}
      </Route>
    </Routes>
  );
}
