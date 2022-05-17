import { Routes, Route } from "react-router-dom";
import ItemListContainer from './components/sections/ItemListContainer'
import Header from './components/layout/Header/Header'
import ItemDetailContainer from './components/sections/ItemDetailContainer'
import Cart from './components/pages/Cart';
import NotFound from './components/pages/NotFound';
import { CartContextProvider } from "./context/CartContext";
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div className='h-screen grid grid-rows-[auto_1fr]'>
      <CartContextProvider>
        <Header />
        <Routes>
            <Route path='/'element={ <ItemListContainer /> } />
            <Route path='/category/:id' element={ <ItemListContainer /> } />
            <Route path='/item/:id' element={ <ItemDetailContainer /> } />
            <Route path='/cart' element= { <Cart /> } />
            <Route path='*' element={ <NotFound /> } />
        </Routes>
      </CartContextProvider>
      <Toaster />
    </div>
  )
}

export default App
