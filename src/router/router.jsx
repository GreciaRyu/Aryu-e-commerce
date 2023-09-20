import NavBar from '../components/NavBar/indexNav';
import ItemListContainer from '../components/ItemListContainer/indexContainer';
import ItemDetailContainer from '../components/ItemListContainer/ItemDetailContainer';
import CartView from '../components/CartWidget/CartView';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import ShopComponentContext from '../context/shopContext';

function Router () {
  return (
    <ShopComponentContext>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer props="Bienvenido" />} />
          <Route path="/productos" element={<ItemListContainer props="Bienvenido" />} />
          <Route path="/productos/:id" element={<ItemListContainer props="Bienvenido" />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartView />} />
        </Routes>
      </BrowserRouter>
    </ShopComponentContext>
  );
}

export default Router;