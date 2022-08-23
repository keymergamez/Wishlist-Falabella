import './index.css';
import {Routes, Route} from "react-router-dom";
import { MainLayout } from './Layout/MainLayout';
import { Catalogo } from './views/Catalogo';
import { MisListas } from './views/MisListas';
import { ListaDetalle } from './views/ListaDetalle';
import { ListContextProvider } from './context/ListContext';

export function App() {
  return (
    <ListContextProvider>
    <MainLayout>
      <Routes>
        <Route path="/" element={<Catalogo />}/>
        <Route path="/Mis-Listas" element={<MisListas />}/>
        <Route path="Mis-Listas/:name" element={<ListaDetalle />}/>
      </Routes>
    </MainLayout>
    </ListContextProvider>
  );
}
