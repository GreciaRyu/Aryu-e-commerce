import NavBar from '../components/NavBar/indexNav';
import ItemListContainer from '../components/ItemListContainer/indexContainer';
import ItemDetailContainer from '../components/ItemListContainer/ItemDetailContainer';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

function Router () {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer props="Bienvenido" />} />
        <Route path="/productos" element={<ItemListContainer props="Bienvenido" />} />
        <Route path="/productos/:id" element={<ItemListContainer props="Bienvenido" />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;